// Requesting a user to choose an operator
let operator = prompt("Welcome!!!\nThis is a calculator that performs simple calculations. You choose the operator depending on which calculation you want to perform either addition, subtraction, multiplication or division. if you enter a different operator or any other character other than the ones displayed here or cancel, you will keep being prompted with an error telling you to try again with the correct one, until you enter the correct operator to proceed\n\nPlease enter your operator and hit enter/Return or OK button below\n'+'  for addition\n'-'  for subtraction\n'*'  for multiplication or\n'/'  for division");
//avoiding entering incorrect operator
while (operator != '+' && operator != '-' && operator != '*' && operator != '/'){
    operator = prompt("Error! You entered unexpected operator, please try again with the correct one\n\nEnter your operator and hit enter/Return or OK button below\n'+'  for addition\n'-'  for subtraction\n'*'  for multiplication or\n'/'  for division");
}
//requesting for input of numbers
let numOne = parseFloat(prompt("Please enter a number. if you enter anything else other than a number, you will keep being prompted an error telling you to enter a valid number.\n\nEnter the first number and hit enter/Return or OK button below: "));
//restricting entering a non number value
while (isNaN(numOne)){
    numOne = parseFloat(prompt("Error!!! you did not enter a valid number! please try again and make sure you enter a valid number this time.\n\nEnter the first number and hit enter/Return or OK button below: "));
}
let numTwo = parseFloat(prompt("Please enter a number. if you enter anything else other than a number, you will keep being prompted an error telling you to enter a valid number.\n\nEnter the second number and hit enter/Return or OK button below: "));
while (isNaN(numTwo)){
    numTwo = parseFloat(prompt("Error!!! you did not enter a valid number! please try again and make sure you enter a valid number this time.\n\nEnter the second number and hit enter/Return or OK button below: "));
}

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
alert(numOne + " " + operator + " " + numTwo + " " + "=" + " " + result + "\n\nThank you for using this simple calculator\nHave a nice work!\nBye!!!");