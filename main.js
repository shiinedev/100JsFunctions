// 1 minutesToHours

const minutesToHours =(minutes)=>{
    const Hours=minutes/60;
    return Hours;
}
// Example usage:
let minutes=minutesToHours(150);
console.log(" minutesToHours  :"+minutes );

//2 averageOf4Numbers

const averageOf4Numbers= (n1,n2,n3,n4) => {
    let sum=n1+n2+n3+n4;
    return sum/4;
}
// Example usage:
let average =averageOf4Numbers(11,9,33,28)
console.log("the averageOf4Numbers is:"+average);

//3  concat3
const  concat3= (string1, string2, string3, separator) => {
     let concat= string1+separator+string2+separator+string3;
     return concat;
}
 // Example usage:
let concat= concat3("HTML","CSS","JAVASCRIPT",",");
console.log("Concat3 : "+concat); // output HTML,CSS,JAVASCRIPT

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
console.log("maximum number is: "+largest); // Output: 19.5
largest = max5(18,20,52,30,1);
console.log("maximum number is: "+largest); // Output:52 
// 5 getMonthsNeededToWait
function getMonthsNeededToWait(startMonth, endMonth) {
    if (startMonth < 1 || startMonth > 12 || endMonth < 1 || endMonth > 12) {
        throw new Error("Month indices must be between 1 and 12");
    }

    if (endMonth >= startMonth) {
        return endMonth - startMonth;
    } else {
        return 12 - startMonth + endMonth;
    }
}

// Example usage:
let monthsToWait = getMonthsNeededToWait(3, 9);
console.log("months To Wait : "+monthsToWait);  // Output: 6

monthsToWait = getMonthsNeededToWait(10, 2);
console.log("months To Wait : "+monthsToWait);  // Output: 4

