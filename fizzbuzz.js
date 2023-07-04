function translate_number(number) {
    let result = "";
    
    if (number % 3 == 0) {
        result += "Fizz";
    }

    if (number % 5 == 0) {
        result += "Buzz";
    }

    if (number % 7 == 0) {
        result += "Bang";
    }
    
    return (result == "" ? number.toString() : result);
}

// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 200; ++i) {
        console.log(translate_number(i));
    }
}

// Now, we run the main function:
fizzbuzz();

