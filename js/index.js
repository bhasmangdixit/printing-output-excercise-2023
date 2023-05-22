
// Task 1
// a is 3 b is 5 c is undefined

let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
alert(`
var a = 3;
var b = 5;
var c;
---------
a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b : ${a += b}
a -= b : ${a -= b}
a *= b : ${a *= b}
a /= b : ${a /= b}
a %= b : ${a %= b}
a == b : ${a == b}
a != b : ${a != b}
a > b : ${a > b}
a < b : ${a < b}
!a && !c : ${!a && !c}
!a || !c : ${!a || !c}
`
);


// Task 2
// Declare the variable first_name and assign it with the value of your first name;
let first_name = "Bhasmang";

// Declare the variable last_name and assign it with the value of your last name;
let last_name = "Dixit";

// Declare the variable last_name and assign it with the value of your last name;
let email = "bhasmangdixit@gmail.com";

// Declare the variable output;
let output;

// Cocatinate the two strings and print the output
output=`My name is ${first_name} ${last_name} you can contact me at ${email}`;

alert(output);
