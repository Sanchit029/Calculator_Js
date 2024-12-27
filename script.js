result = document.getElementById("result");
clear = document.getElementById("clear");
divide = document.getElementById("divide");
add = document.getElementById("add");
substract = document.getElementById("substract");
multiply = document.getElementById("multiply");

decimal = document.getElementById("decimal");
zero = document.getElementById("zero");
one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");
seven = document.getElementById("seven");
eight = document.getElementById("eight");
nine = document.getElementById("nine");

hasOperator = false;

function calculate()
{
    if(hasOperator)
    result.value = eval(result.value);
    if(result.value == "0")
        result.value = "0";

}
function clearAll()
{
    result.value = "0";
}   
function addDecimal()
{
    result.value += ".";
}
function addNumber(num)
{
    if(result.value == "0")
        result.value = num;
    else
    result.value += num;
}

function addOperator(operator)
{
    result.value += operator;
    hasOperator = true;
}