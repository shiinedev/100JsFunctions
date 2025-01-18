//7 lastNRevert
function lastNRevert(text, n) {
    let lastN= text.slice(-n);
    return lastN.split("").reverse().join("");
}
// Example usage:
let reverseStr=lastNRevert("T-shirts", 4)
console.log("7. the reverseStr : "+reverseStr); // Output: stri