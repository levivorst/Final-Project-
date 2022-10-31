const express = require("express");

const app = express();
app.use('/js', express.static(__dirname + '../public/js'));
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const path = require('path');
const mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


 let epics =
  ["","סוכות",
  "חנוכה",
  "פורים",
  "שבועות",
  "ראש השנה",
  "שמחת תורה",
  "טו בשבט",
  "לג בעומר",
  "יום כיפור",
]


function randomEpicFunc(min , max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

app.get('/', (req, res) => {
  
  res.sendFile(path.join(__dirname, 'login.html'));

})

app.get('/*js', (req, res) => {
  res.sendFile("client/game/game.html",{ root: '../' });

})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/login.html'));

})

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/game/game.html'));

})

io.on('connection', (socket) => {
  console.log('a user connected');

    socket.on('changeEpic', msg => {
      randomEpic = randomEpicFunc(1,9)
      socket.emit('epic', epics[randomEpic]);
    });

    socket.on('check game', msg => {
      console.log(epics[randomEpic])
      chekImg(epics[randomEpic],msg)
    });

  socket.on('craete user', msg => {
    craeteUser(msg.user,msg.password)
    // io.emit('chat message', msg);
  });
  socket.on('find user',msg=>{
    console.log("sasa")
    randomEpic = randomEpicFunc(1,9)
    socket.emit("move",epics[randomEpic])
    
  })

});

http.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
    
async function chekImg(epic,imges){
  let sumUser =2;//= findUser();
  let text
  let sum=0
  for (i=1;i<=9;i++){
    text= await "img"+i
    console.log(epics[i])
    // console.log(imges.text)
    if ((imges[i] ==true)&& ( epics[i]==epic)){
      sum = sum + 1
      console.log("yes")
    }
   
  }
  console.log("sumUser" +sum)
  let sumTotel = sum + sumUser
  // console.log("sumTotel"  + sumTotel)
  addToUser(sum);
}




function addToUser (sum1){

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { userName: "demo@devias.io" };
  var newvalues = { $set: {sum: sum1} };
  dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
}


async function  findUser (userName,password){

   

  let user = null;
let client;
  try{
    client = await MongoClient.connect(url, {useNewUrlParser: true});
    var dbo =await client.db("mydb");
    var query = { userName: userName, password:password};
  user = await  dbo.collection("users").find(query) 
//   db.close();
//  })
// {
//       if (err) throw err;
      
//     // await  console.log("sum users = " + result[0].token);
//     //   user=await result[0]
//     // await  db.close();
    
      
//     });  
    
//   });

  await console.log(user)

   return await user;

  }
  catch(err){ console.error(err); } // catch any mongo error here
  finally{ client.close(); } // make sure to close your connection after
 }

  

// }


function craeteUser (userName,password){
  // var MongoClient = require('mongodb').MongoClient;
  // var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { userName: userName, password:password,token: password + "191" ,sum:0};
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}