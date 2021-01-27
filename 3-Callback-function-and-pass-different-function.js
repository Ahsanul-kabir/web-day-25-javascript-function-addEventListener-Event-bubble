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
explain('sagir', 20, washHand);
explain('galib', 27, taskShower);