function translate_number(number) {
    if (number % 15 == 0) {
        return "FizzBuzz";
    } else if (number % 3 == 0) {
        return "Fizz";
    } else if (number % 5 == 0) {
        return "Buzz";
    } else {
        return number.toString();
    }
}

// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 100; ++i) {
        console.log(translate_number(i));
    }
}

// Now, we run the main function:
fizzbuzz();

