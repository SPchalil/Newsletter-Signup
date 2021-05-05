const express =  require("express");
const bodyParser =  require("body-parser");
const request =  require("request");



const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){
    
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);
});

app.listen(3002, function(){
    console.log("Server is running on port 3002");
});
//API Key
//7e6403add1ece0d5dbb369352e33d876-us1

//List id
//4f4462f411