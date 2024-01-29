let number = +prompt('Enter the number');
let result = 0;
while(number) {
    result += number % 10;
    number = Math.floor(number / 10);
} alert(`Result is ${result}`);