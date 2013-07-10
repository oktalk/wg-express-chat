var nickname = ''
  , socket = io.connect('http://localhost');

function addMessage(data) {
  var msg = data.message
      //,regex = new RegExp('/@' + nickname + '/', 'g')
      ,ping = msg.indexOf('@' + nickname) >= 0 ? 'ping-user' : '';

  $('<blockquote/>')
    .attr('data-nickname', data.user)
    .addClass(ping)
    .append("<p>"+msg+"</p>")
    .append("<small>"+data.user+"</small>")
    .prependTo($('#messages-container'));
}

socket.on('auth', function (data) {
  var i;
  $('#messages-container').empty();
  console.log(data.messages);
  for (i = 0; i < data.messages.length; i++) {
    addMessage(data.messages[i]);
  }

//	nickname = prompt("What is your nickname?");
	nickname = "Anonymous";
	socket.emit('setnick', {nickname: nickname});
});

socket.on('updateusers', function(data) {
  var list = $('#user-list'),
      user,
      list_item;
  
  list.empty();
  $(".presence .badge").text(Object.keys(data.users).length);
  //console.log(data);

	for (user in data.users) {
    if (data.users.hasOwnProperty(user)) {
      //console.log(user);
      list_item = $('<li/>').addClass('list-group-item').text(data.users[user].nickname);
      if (data.users[user].nickname === nickname) {
        list_item.addClass('active');
      }
      list_item.appendTo(list);
    }
  }
});

socket.on('addmessage', function(data) {
  //console.log('receiving message: ', data);
  addMessage(data);
});

$('#sendmessage').submit(function(e) {
  var nic = ($("#nickname").val() === "" )? "Anonymous" : $("#nickname").val() ;
  var data = { user: nic, message: $('#message').val() };
  //console.log('sending message: ', data);
  socket.emit('setnick', {nickname: nic});
  socket.emit('send', data);
  $('#message').val('');
  e.preventDefault();
});