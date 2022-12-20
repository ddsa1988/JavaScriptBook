"use strict";

/*
By labeling a statement, you give it a name that you can use to refer to it elsewhere in your program. 
You can label any statement, although it is only useful to label statements that have bodies, such as loops and
conditionals. By giving a loop a name, you can use break and continue statements inside the body of the 
loop to exit the loop or to jump directly to the top of the loop to begin the next iteration.
*/

let a = 0;

mainloop: while (a < 10) {
    a++;
    if (a > 4 && a < 7) continue mainloop;
    console.log(a);
}
console.log();

/*
When break is used with a label, it jumps to the end of, or terminates, the enclosing statement that has the specified label.
You need the labeled form of the break statement when you want to break out of a statement that is not the nearest enclosing 
loop or a switch.
*/

mainloop: for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 2) break mainloop;
        console.log(i, " ", j);
    }
}
console.log();

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 2) break;
        console.log(i, " ", j);
    }
}
