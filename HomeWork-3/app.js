let number1 = prompt('Please, enter only numbers');
while (isNaN(number1) || number1 === '') {
    alert('Error, Try Again!');
    number1 = prompt('Please, enter only numbers!');
}