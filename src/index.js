const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const socketIO = require('socket.io');
const http = require('http');
//initializations
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

//routes
app.use(require("./routes/"));


//sockets
require("./sockets")(io);

//static files
app.use(express.static(path.join(__dirname, "public")));


//settings
app.engine("ejs", engine);
app.set('view engine', 'ejs');
path.join(__dirname, 'views');
app.set('views', path.join(__dirname, 'views'));



// starting the server
const PORT = process.env.PORT || 3000;
server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
