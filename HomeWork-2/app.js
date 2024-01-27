let number1 = +prompt('Please, enter your first number');
let number2 = +prompt('Please, enter your second number');
let calculation = prompt('Please, enter calculation method');
switch (calculation) {
    case '+':
        alert(`The result is ${number1 + number2}`);
        break;
    case "-":
        alert(`The result is ${number1 - number2}`);
        break;
    case '*':
        alert(`The result is ${number1 * number2}`);
        break;
    case '/':
        alert(`The result is ${number1 / number2}`);
        break;

    default:
        alert('Please enter only calculation method!');
        break;
}