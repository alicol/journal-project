require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let journal = require("./controllers/journalcontroller");
let user = require("./controllers/usercontroller");


sequelize.sync();
//sequelize.sync({force: true})

app.use(express.json());
//we need to use: app.use(endpoint, callback function)
// app.use("/test", function(req, res){ //this function always has two parameters; req meaning request, res meaning response
//     res.send("This is a message from the test endpoint on the server")
// })

// //challenge - name
//  app.use("/about-me", function(req, res){
//      res.send("My name is Ali Colglazier")
//  })




//have endpoint of journal/practice
//send a response from that endpoint (this is a practice route)
app.use('/journal', journal);
app.use('/user', user);


app.listen(3000, function(){
    console.log("App is listening on port 3000");
})
//Ctr + C to clear terminal/stop server from running
//saving while server is running will not be rerendered for you, you have to rerun it
//"nodemon" in server to get server running