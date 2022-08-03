const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
})); //grab info from the html using post method


app.get("/", (req, res) => {
  var items = []; // this goes to our list.ejs using res.render and newTask ejs var

  var today = new Date(); //js method gives current date in a string ex: new Date(2022-08-01T15:15:48.034Z)
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  var day = today.toLocaleString("en-US", options);


  //this render ejs file which is named list.ejs
  res.render("list", { //we have to use all ejs variables in this place
    kindOfDay: day,
    newTasks: items //**we sending items arrey to our to do list in our list.ejs**//
  }); //we sending that our user put on the form
});

app.post("/", (req, res) => {
  var toDo = req.body.toDoTask;
  items.push(toDo); //coz our res.render code is placed before our app.post
  //we create this items var before and now pushing our
  //post data (input by user) to items arrey
  res.redirect("/");
});




app.listen(3000, () => {
  console.log("server started on port 3000");
});
