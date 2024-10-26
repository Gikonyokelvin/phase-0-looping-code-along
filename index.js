// Code your solutions in this file

const names = ["Kelvin", "Mark", "Jane"];
let event = "birthday";
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
};

function countDown(num) {
    let i = 0;
    while (num > i) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
};