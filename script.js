// What keyword specifies an action when all tests above have failed?
if (a = b) {
    console.log('');
}
else ('');
//else

// What are the keywords that test for a condition when all tests above it have failed?
if (a = b) {

}
else if (a = c);
//else if

// In one word, what type of statement is formatted the same way as else and else if?
if (a = b);
//if

// What is the last line of an else block?
if (condition1) {

}
else if (condition2) {
    //logic
}

// Create an else block that assigns the value of b to a.
if (b != a) {
    //logic
}
else b === a;

// Code an else block that displays an alert saying "Nope".
if (a = b) {
}
else alert('Nope');

// Code an else if block that tests whether a has the same value as b. If so, display an alert that says "OK".
if (a = b) {
    alert('OK');
}
else if (a !== b) {
    //logic
}

// Code an else block that assigns the value of one variable to another
if (cost = time) {
    //logic;
}
else { 
    time = travel 
}

    //or

if(num1 = num2) {
    //logic 
}
else {
    num2 = num1;
  }

// Code an else block that assigns a number to a variable and displays an alert specifying a string as the message. The variable has been declared beforehand.
if (time = 1) {
    alert('lorem');
}
else{
    time > 1
    alert('time');
}

// Code a block, that, if tests above it fail, checks whether one variable doesn't equal another and, if so, displays a prompt that assigns the user's response to a variable that has been declared beforehand.
// if if else else
// 2 vars !== 

// if else alert('')

name = prompt('enter your name');

if (name = 'justin') {
    alert('hello ' + name);
}
else  { name !== name 
    alert('hello' + name);
}

// Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.
// if statemt
// var >== var
// alert()
// if else
if (time >= cost) {
    alert('time is more');
}
else  {
    alert('time is less');
}

// Code an if statement that tests whether the value represented by a variable is less than the value represented by another variable. If so, display an alert. If not, test whether the value represented by the first variable is greater than the value represented by the second variable. If so, display a different alert.
if (time < total) {
    alert('');
}
else if (time > total) {
    alert('');
}

// Code an else block that assigns the value of one variable to another.
if (a > b) {
}
else { a < b 
}

// Code an else block that assigns a number to a variable and displays an alert specifying a string as the message. The variable has been declared beforehand.

if (a = 1) {
    //logic
}
else { a = 2
    alert('');
}

// Code a block, that, if tests above it fail, checks whether one variable doesn't equal another and, if so, displays a prompt that assigns the user's response to a variable that has been declared beforehand.

age = prompt('enter your age');

if (age != 21) {
    alert('my age is not 21');
}
else {
    age == 21
    alert('');
}

// Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.
if (total > cost) {
    alert('time is less than cost');
}
else {
    total < cost
    alert('time is more than cost');
}

// Code an if statement that tests whether the value represented by a variable is less than the value represented by another variable. If so, display an alert. If not, test whether the value represented by the first variable is greater than the value represented by the second variable. If so, display a different alert.

if (time < total) {
    alert('');
}
else if (time > total) {
    alert('');
}


if (a === 10) {
    alert("a is 10");
  }
//   If a isn't 10, display an alert that says "a is " followed by the value of a.
else if (a !== 10) {
    alert("a is not equal to 10");
}
else {
    alert("a is " + a);
  }
  
//   Prompt the user to enter a city.
//   If the city is Akron, display an alert acknowledging it.
//   If not, display an alert acknowledging it isn't Akron.
//   Click the Run It button to run your code live.
let city = prompt('enter your city', );
if (city === 'akron') { 
  alert('welcome home');
}
else {
  alert('welcome to ' + city);
}


//example
var cityEntered = prompt("Enter a city");
if (cityEntered === "Akron") {
  alert("You entered Akron");
}
else {
  alert("Why didn't you enter Akron?");
}

// Prompt the user to enter a city.
// If the city is Akron, display an alert acknowledging it.
// If not, check to see if it's Buffalo.
// If it is, display an alert acknowledging it's Buffalo.
// Otherwise, display a different alert.\\

let city2 = prompt('enter city name');
if (city2 === 'buffalo') {
    alert('welcome home');
}
else {
    alert('welcome from ' + city2);
}
