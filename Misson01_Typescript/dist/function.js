"use strict";
// Normal Function
function add(num1, num2) {
    let total = num1 + num2;
    console.log(total);
}
add(10, 22);
const addArrow = (num1, num2) => {
    console.log(num1 + num2);
};
const arr = [22, 55, 11];
const newArray = arr.map(item => item * item);
const person = {
    name: "midul",
    balance: 5,
    addBlance(money) {
        const totalmoney = this.balance + money;
        // return `my new Balance is ${totalmoney}`
        // return totalmoney
        console.log(totalmoney);
    }
};
//difolt perapitam
function add2(num1, num2 = 10) {
    console.log(num1 + num2);
}
add2(12);
