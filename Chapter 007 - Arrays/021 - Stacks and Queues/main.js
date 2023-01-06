"use strict";

//Stack: First In - Last Out
const stack = new Array();
console.log(stack);

for (let i = 0; i < 10; i++) {
    stack.push(i);
}
console.log(stack);
console.log();

console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log();

//Queue: First In - First Out
const queue = new Array();
console.log(queue);

for (let i = 10; i > 0; i--) {
    queue.push(i);
}
console.log(queue);
console.log(queue.shift());
console.log(queue);
console.log(queue.shift());
console.log(queue);
