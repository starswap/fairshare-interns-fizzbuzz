function process_3(strings) {
    return strings.concat("Fizz");
}

function process_5(strings) {
    return strings.concat("Buzz");
}

function process_7(strings) {
    return strings.concat("Bang");
}

function process_11(strings) {
    return ["Bong"];
}

function process_13(strings) {
    let i = 0;
    strings.push("placeholder"); // make space for the new string
    for (; i < strings.length && strings[i][0] == 'F'; ++i) {}
    let insert_pos = i;
    for (; i < strings.length - 1; ++i) {
        strings[i + 1] = strings[i];
    }
    strings[insert_pos] = "Fezz";
    return strings;
}

function process_17(strings) {
    return strings.reverse();
}

function translate_number(number) {
    let mappings = [
        [ 3,  process_3 ],
        [ 5,  process_5 ],
        [ 7,  process_7 ],
        [ 11, process_11 ],
        [ 13, process_13 ],
        [ 17, process_17 ]
    ]
    
    let strings = [];

    for (let [mod, handler] of mappings) {
        if (number % mod == 0) {
            strings = handler(strings);
        }
    }
   
    return (strings.length == 0 ? number.toString() : strings.join(""));
}

// This is our main function
function fizzbuzz() {
    for (let i = 1; i <= 300; ++i) {
        console.log(translate_number(i));
    }
}

// Now, we run the main function:
fizzbuzz();

