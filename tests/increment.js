// import { Buffer } from 'node:buffer';



// console.log(buf.toString('hex'));
// // Prints: 68656c6c6f20776f726c64
// console.log(buf.toString('base64'));
// // Prints: aGVsbG8gd29ybGQ=

// console.log(Buffer.from('fhqwhgads', 'utf8'));
// // Prints: <Buffer 66 68 71 77 68 67 61 64 73>
// console.log(Buffer.from('fhqwhgads', 'utf16le'));
// Prints: <Buffer 66 00 68 00 71 00 77 00 68 00 67 00 61 00 64 00 73 00>

// function increment (buffer) {
//     for (var i = 0; i < buffer.length; i++) {
//         if (buffer[i] != 255){
//             buffer[i]++
//         }break;
//     }
// }

// increment("01");

function increment (buffer) {
    buffer = Buffer.from(buffer , 'hex');
     for (var i = buffer.length -1; i >=0 ; i--) {
        if (buffer[i]++ !==255)break;
     }
     if (buffer[0] === 0) buffer = Buffer.concat([Buffer.from([1]), buffer])
     return(Buffer.from(buffer, 'hex'))
}
console.log(increment("03") )     // expected : <Buffer 04>
console.log(increment("a0"))       // expected : <Buffer a1>
console.log(increment("ff"))      // expected : <Buffer 01 00>
console.log(increment("d537"))
console.log(increment("17ffff"))

// console.log(Buffer.from('1ag123', 'hex'));
// // Prints <Buffer 1a>, data truncated when first non-hexadecimal value
// // ('g') encountered.

// console.log(Buffer.from('1a7', 'hex'));
// // Prints <Buffer 1a>, data truncated when data ends in single digit ('7').

// console.log(Buffer.from('1634', 'hex'));
// // Prints <Buffer 16 34>, all data r