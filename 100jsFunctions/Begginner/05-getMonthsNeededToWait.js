
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
console.log("5. months To Wait : "+monthsToWait);  // Output: 6