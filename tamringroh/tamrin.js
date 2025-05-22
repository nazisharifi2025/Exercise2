// function greet(name) {
//   return "Hello, " + name;
// }
// console.log(greet("Ali"));
// // Function Expirtion
// const greetin = function (name) {
//   return "Hello, " + name;
// };
// console.log(greet("Sara"));
// // Arro Fanction
// const greeting = (name) => {
//   return "Hello, " + name;
// };
// // اگر تنها یک خط باشد:
// const greetShort = (name) => "Hello, " + name;
// // تابع بدون پارامتر
// function sayHi() {
//   console.log("Hi!");
// }
// sayHi();
// // تابع بازگشتی callback Function
// function greet(name, callback) {
//   const message = "Hello " + name;
//   callback(message);
// }

// greet("Ali", function (msg) {
//   console.log(msg);
// });
// // Defult paramitr
// function greet(name = "Guest") {
//   return "Hello, " + name;
// }
// // restet paramitr
// function sum(...numbers) {
//   return numbers.reduce((acc, val) => acc + val, 0);
// }
// // تابع خود اجرا
// (function () {
//   console.log("This function runs immediately!");
// })();
// // میتود
// const person = {
//   name: "Ali",
//   sayHello: function () {
//     return "Hello, I'm " + this.name;
//   },
// };

// console.log(person.sayHello());
// تست
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // ?
counter(); // ?
