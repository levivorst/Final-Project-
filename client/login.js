
// ES6 import or TypeScript
// import { io } from "socket.io-client";
// CommonJS
// const io = require("socket.io-client");

// const { Socket } = require("dgram");

function login (){
  

    let userName = document.getElementById('exampleInputEmail1');
    let password = document.getElementById('exampleInputPassword1');

    socket.emit('chat message', userName.value + "  " + password.value);
    console.log(userName.value + "  " + password.value)


}