// Requesting a user to choose an operator
let operator = prompt("Please choose your operator in either\n'+'  for addition\n'-'  for subtraction\n'*'  for multiplication or\n'/'  for division");
while (operator != '+' && operator != '-' && operator != '*' && operator != '/'){
    operator = prompt("Oops! You entered ivalid operator\nPlease enter either\n'+'  for addition\n'-'  for subtraction\n'*'  for multiplication or\n'/'  for division");
}
//requesting for input of numbers
let numOne = parseFloat(prompt("Enter the first number: "));
let numTwo = parseFloat(prompt("Enter the second number: "));

//lets keep the resul in a variable using conditional satements
let result;

if (operator == '+') {
    result = numOne + numTwo;
}
else if (operator == '-') {
    result = numOne - numTwo;
}
else if (operator == '*') {
    result = numOne * numTwo;
}
else {
    result = numOne / numTwo;
}
alert(numOne + " " + operator + " " + numTwo + " " + "=" + " " + result + "\n\nThank you for using this simple calculator\nHave a nice work!");