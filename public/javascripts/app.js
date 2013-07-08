var nickname = ''
  , socket = io.connect('http://localhost');

socket.on('auth', function () {
	nickname = prompt("What is your nickname?");
	socket.emit('setnick', {nickname: nickname});
});

socket.on('welcome', function () {
	alert('Welcome!');
});