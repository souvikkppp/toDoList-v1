const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
})); //grab info from the html using post method
app.use(express.static("public")); //to load static files like css and img

app.get("/", (req, res) => {
  let items = ["Buy food","Cook food","Eat food"]; // this goes to our list.ejs using res.render and newTask ejs var

  let today = new Date(); //js method gives current date in a string ex: new Date(2022-08-01T15:15:48.034Z)
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  let day = today.toLocaleString("en-US", options);


  //this render ejs file which is named list.ejs
  res.render("list", { //we have to use all ejs variables in this place
    kindOfDay: day,
    newListItems: items
  }); //**we sending items arrey to our to do list in our list.ejs**//
  //we sending that our user put on the form
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
}); //coz our res.render code is placed before our app.post
//we create this items var before and now pushing our
//post data (input by user) to items arrey




app.listen(3000, () => {
  console.log("server started on port 3000");
});
