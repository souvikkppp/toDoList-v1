const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

var today = new Date();//js method gives current date in a string ex: new Date(2022-08-01T15:15:48.034Z)
var currentDay = today.getDay();//js method gives current day 0 to 6. 0 means sunday
var day = "";
// another way of doing this vol2
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

app.get("/", (req, res) => {
  // another way of doing this vol2

  // if (currentDay === 6 || currentDay === 0) {
  //   day = days[currentDay];
  // } else {
  //   day = days[currentDay];
  // }

  switch (currentDay) {
    case 0:
      day = "Sunday"
      break;
    case 1:
      day = "Monday"
      break;
    case 2:
      day = "Tuesday"
      break;
    case 3:
      day = "Wednesday"
      break;
    case 4:
      day = "Thursday"
      break;
    case 5:
      day = "Friday"
      break;
    case 6:
      day = "Saturday"
      break;
    default:

  }
  //this render ejs file which is named list.ejs
  res.render("list", {
    kindOfDay: day
  });

});


console.log(today);



app.listen(3000, () => {
  console.log("server started on port 3000");
});
