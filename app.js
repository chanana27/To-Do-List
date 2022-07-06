const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["hello abhay"];
const workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    let day = date.getDate();    

    res.render('list', {listTitle: day, nextListItems: items});
});

app.post("/", function(req, res){

    const item = req.body.newItem;
    // console.log(req.body);
    if(req.body.list === 'Work'){
    workItems.push(item);
    res.redirect("/work");
    }

    items.push(item);
    res.redirect("/");
    // console.log(val);
})

app.get("/work", function(req, res){
    res.render('list', {listTitle: "Work", nextListItems: workItems});
});

app.post("/work", function(res, req){
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
