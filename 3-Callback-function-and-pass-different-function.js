function explain(name, age, task) {
    console.log('Hello', name);
    console.log('Your age', age);
    task();
}

function washHand() {
    console.log('Wash your hand');
}

function taskShower() {
    console.log('Take Shower');
}

function scrollFacebook() {
    console.log('scroll Facebook but do not like post');
}
explain('Sagir Uddin', 20, washHand);
console.log('---------------------------')
explain('Galib Uddin', 27, taskShower);
console.log('---------------------------')
explain('Mogir Uddin', 25, scrollFacebook);