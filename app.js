const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");//this is our created local module

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
})); //grab info from the html using post method
app.use(express.static("public")); //to load static files like css and img

//we can push inside const so we can use it and this values never gonna change so const is better
const items = ["Buy food","Cook food","Eat food"];// this goes to our list.ejs using res.render and newTask ejs var
const workItems = [];

app.get("/", (req, res) => {

//EXAMPLE: 1
//let day = date.getDate();for date function
  const day = date.getDate();//here we taking getDate() function from our local date.js module
  //this making our code more manageble

//EXAMPLE: 3
//let day = date();

  res.render("list", { listTitle: day, newListItems: items});
});

app.post("/", (req, res) => {

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work")
 } else {

  items.push(item);
  res.redirect("/");
 }
});//here we use this logic by trgering buttons name attribte to determine which
//route we are and to post and redirect data on same route

app.get("/work", (req, res) =>{
  res.render("list", {listTitle: "Work List", newListItems: workItems})
});//here we sending the value of button for work route
app.get("/about", (req, res) => {
  res.render("about")
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
