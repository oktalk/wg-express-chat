var nickname = ''
  , socket = io.connect('http://localhost');

socket.on('auth', function () {
	nickname = prompt("##What is your nickname?");
	socket.emit('setnick', {nickname: nickname});
});

socket.on('welcome', function (data) {
	//alert('Welcome!');

	// for (var user in data) {
	// 	if(data.hasOwnProperty(user)) {
	// 		$("ul#name-list").append("<li>" + data[user] + "</li>");
	// 	}
	// }

	$.each(data, function(index, value) {
	  $("ul#name-list").append("<li>" + data[value] + "</li>");
	});

	console.log(data)
});
