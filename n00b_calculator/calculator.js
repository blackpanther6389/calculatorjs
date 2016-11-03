/**********************************************************************************************************************
* Program:  n00b Calculator
* This:     calculator.js
* Name:     Rashad Hill
* Date:     28-Oct-16
* Purpose:  This program is a very basic calculator that can evaluate two numbers by adding them together,
*           subtracting, multiplying, or dividing, and displays the result. The user enters the whole expression
*           EX. 5 + 6, into the input field and the program handles the rest
**********************************************************************************************************************/

//Create a reference variable for input field
var input = document.getElementById("input");

//Create a variable for storing the result of evaluated expression
var result;

//Create a variable to store the expression as split tokens
var expression;

//Create a reference variable for the button element
var button = document.getElementById("button");

//Create a reference variable for the h1 element
var resultText = document.getElementById("result");

/**********************************************************************************************************************
*   splitExpression() - returns the result of splitting the expression
**********************************************************************************************************************/
//*Start splitExpression
function splitExpression(tokens)
{
    return tokens.split(" ");
}
//*End

/**********************************************************************************************************************
*   evaluate() - Evaluates the expression with the given tokens
**********************************************************************************************************************/
//*Start evaluate
function evaluate(tokens)
{
    //Check if values entered are integers. If no, display error, if yes, continue with evaluation
    if (isNaN(tokens[0]) ||
       isNaN(tokens[2]))
        {
            //Display error message
            resultText.innerHTML = "Can't evaluate non-numeric values. Please try again!";
            return;
        }
    else
        {
            //Declare number variables
            var num1;
            var num2;
            
            //Parse the values into integers to be worked on
            if (numIsInt(tokens[0]) ||
               numIsInt(tokens[2]))
                {
                    num1 = Number.parseFloat(tokens[0]);
                    num2 = Number.parseFloat(tokens[2]);
                }
            else
                {
                    num1 = Number.parseInt(tokens[0], 10);
                    num2 = Number.parseInt(tokens[2], 10);
                }
            
            //Switch statement for checking if middle token is an appropriate operator
            switch (tokens[1])
                {
                    case "+":
                        return num1 + num2;
                        
                    case "-":
                        return num1 - num2;
                        
                    case "*":
                        return num1 * num2;
                        
                    case "X".toLowerCase:
                        return num1 * num2;
                        
                    case "/":
                        return num1 / num2;
                        
                    default:
                        resultText.innerHTML = "Can't evaluate expression. Please try again!";
                        return;
                }
        }
}
//*End

/**********************************************************************************************************************
*   input.onchange() - Anonymous function that acts whenever a user types something into the input field
**********************************************************************************************************************/
//*Start input.onchange
input.onchange = function()
{
    resultText.style.display = "none";
    result = 0;
};
//*End

/**********************************************************************************************************************
*   button.onclick() - Anonymous function that performs the calculations when a user clicks the button
**********************************************************************************************************************/
//*Start button.onclick
button.onclick = function()
{
    expression = splitExpression(input.value);
    result = evaluate(expression);
    resultText.style.display = "block";
    resultText.innerHTML = "The answer is: " + result.toString();
};
//*End

function numIsInt(number)
{
    return number == Math.floor(number);
}