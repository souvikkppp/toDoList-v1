//THERE are multiple ways of using a java script function
//here are few example changes will be shown in app.js also for understanding

//EXAMPLE: 1 // most shortest and efficient code// best method
//this way we can use multiple function
//node module allows us to write only exports
//we using const here coz this values not gonna change, we using annomous function
//coz its shoter our code
exports.getDate = () => {
  const today = new Date(); //js method gives current date in a string ex: new Date(2022-08-01T15:15:48.034Z)
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  return today.toLocaleString("en-US", options);
};
//we using const here coz this values not gonna change
exports.getDay = () => {
  const today = new Date(); //js method gives current date in a string ex: new Date(2022-08-01T15:15:48.034Z)
  const options = {
    weekday: "long",
  };
  return today.toLocaleString("en-US", options);
};
//EXAMPLE: 2
// module.exports.getDate = getDate;
//
// function getDate() {
//   let today = new Date(); //js method gives current date in a string ex: new Date(2022-08-01T15:15:48.034Z)
//   let options = {
//     weekday: "long",
//     month: "long",
//     day: "numeric"
//   };
//   let day = today.toLocaleString("en-US", options);
//   return day;
// }
//
// module.exports.getDay = getDay;
//
// function getDay() {
//   let today = new Date(); //js method gives current date in a string ex: new Date(2022-08-01T15:15:48.034Z)
//   let options = {
//     weekday: "long",
//   };
//   let day = today.toLocaleString("en-US", options);
//   return day;
// }


//EXAMPLE: 3

// module.exports = getDate;
//
// function getDate() {
//   let today = new Date(); //js method gives current date in a string ex: new Date(2022-08-01T15:15:48.034Z)
//   let options = {
//     weekday: "long",
//     month: "long",
//     day: "numeric"
//   };
//   let day = today.toLocaleString("en-US", options);
//   return day;
// }

//EXAMPLE: 3
// USING A ANNOMOUS function

//let day =
