nums = [5, 12, 89, 45, 18, 8];

// check enen odd number
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    //console.log(num * 2);

    if (num % 2 == 0) {
        console.log(num, ': is even number');
    } else {
        console.log(num, ': is odd number');
    }
}

console.log('---------------------------------');
// All number convert to even number hok seta even or odd
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    //console.log(num * 2);

    if (num % 2 == 0) {
        console.log(num, ': is even number');
    } else {
        console.log(num, ': is odd number');
    }
}

console.log('---------------------------------');

friends_age = [13, 17, 19, 20, 18];
for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    //console.log(age);
    if (friends_age % 2 == 0) {
        console.log(age, ': is even number');
    } else {
        console.log(age * 2, ': is odd number');
    }
}

console.log('---------------------------------');