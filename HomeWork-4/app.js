let userNamber = prompt('Please, enter the numbers');
while (isNaN(userNamber) || userNamber === '') {
    alert('Error, Try Again!');
    userNamber = prompt('Please, enter only numbers!');
}
// აი აქ გავიჭედე 