const express = require("express")
const http = require("http")
const app = express();
const path = require("path")
const server = http.createServer(app)
const socketIO = require("socket.io")



const io = socketIO(server);

app.use(express.static(path.join(__dirname,"src")))
const PORT = process.env.PORT || 5000;

io.on("connection",(socket) => {
    socket.on("Chatting" , (data) =>{
    console.log(data)
    io.emit("Chatting" , data)
    })
})



server.listen(PORT, () =>console.log(`Server is running ${PORT}`))