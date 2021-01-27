function enenify(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    } else {
        result = num * 2;
    }
    return result;
}

var result = enenify(5);
var square = result * result;
console.log('result', result);
console.log('square', square);



function enenify_all(nums) {
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = enenify(num);
        even_array.push(result);
    }
    return even_array;
}

nums = [5, 12, 89, 45, 18, 8];
var nums_even = enenify_all(nums);
console.log(nums_even);