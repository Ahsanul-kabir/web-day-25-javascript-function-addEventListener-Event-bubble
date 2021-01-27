function enenify(num) {
    if (num % 2 == 0) {
        console.log(num, ': is even number');
    } else {
        console.log(num * 2, ': is odd number');
    }
}

function enenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        enenify(num);

    }
}
nums = [5, 12, 89, 45, 18, 8];
enenify_all(nums);

console.log('---------------------------------');

friends_age = [13, 17, 19, 20, 18];
enenify_all(friends_age);

console.log('---------------------------------');