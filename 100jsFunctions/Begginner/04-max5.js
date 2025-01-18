// 4 max5

const max5= (num1,num2,num3,num4,num5) => {
    let max = num1;

    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    if (num4 > max) {
        max = num4;
    }
    if (num5 > max) {
        max = num5;
    }

    return max;
    
}
// Example usage:
let largest = max5(1,2,12,-30,19.5);
console.log("4.maximum number is: "+largest); // Output: 19.5