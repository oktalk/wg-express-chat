wg-express-chat
===============

1. [Install Node](http://www.bearfruit.org/2013/06/19/how-to-install-node-js-successfully/)
2. Run npm install
3. Start the app with npm start - view the site at http://localhost:3000
4. Run the test with npm test (ideally you should write some tests)

Files of note
=============

app.js - the main startup file, at the bottom of this file see io.sockets.on('connection'... for the socket.io code
views/index.mustache - the main HTML file for the page, it uses the mustache template syntax and is rendered on the server
routes/index.js - the main view for the page, currently there is no dynamic content, it simply renders a static page
public/javascripts/app.js - the client side javascript code for the app
public/* - static css, js and images for the app - drop anything in here and it will be served as-is