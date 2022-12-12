"use strict";

//the backslash allows you to escape from the usual interpretation of the character

console.log('You\'re right, "it" can\'t be "a" quote'); //Single quotes represented by \'
console.log("\xA9"); //Represents the copyright symbol
console.log("\u{1f600}"); //Represents a smile face emoji
console.log();

/*

***** JavaScript escape sequences *****
\0 - The NUL character (\u0000)
\b - Backspace (\u0008)
\t - Horizontal tab (\u0009)
\n - Newline (\u000A)
\v - Vertical tab (\u000B)
\f - Form feed (\u000C)
\r - Carriage return (\u000D)
\" - Double quote (\u0022)
\' - Apostrophe or single quote (\u0027)
\\ - Backslash (\u005C)
\xnn - The Unicode character specified by the two hexadecimal digits nn
\unnnn - The Unicode character specified by the four hexadecimal digits nnnn
\u{n} - The Unicode character specified by the codepoint n, where n is one to six hexadecimal digits between 0 and 10FFFF (ES6)

*/
