const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
})); //grab info from the html using post method
app.use(express.static("public")); //to load static files like css and img

let items = ["Buy food","Cook food","Eat food"];// this goes to our list.ejs using res.render and newTask ejs var
let workItems = [];

app.get("/", (req, res) => {

  let today = new Date(); //js method gives current date in a string ex: new Date(2022-08-01T15:15:48.034Z)
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  let day = today.toLocaleString("en-US", options);

  res.render("list", { listTitle: day, newListItems: items});
});

app.post("/", (req, res) => {

  let item = req.body.newItem;

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
