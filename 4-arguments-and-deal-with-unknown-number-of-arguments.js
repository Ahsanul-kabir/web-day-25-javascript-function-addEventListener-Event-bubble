/*function addNumbers(num1, num2) {
    return num1 + num2;
}

var result = addNumbers(3, 5);
console.log(result);*/

function addNumbers() {
    console.log(arguments); // Argument = Array like Object
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        // ami jdi sob parameter access korte cai tahole arguments diya access kora lagbo
        // Argument sudu function er vitor use kora lagbo
        const num = arguments[i];
        //console.log(num);
        sum = sum + num;
    }
    return sum;
}

var result = addNumbers(3, 5, 10, 20, 30, 4);
console.log(result)