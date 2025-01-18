 // 15 doubleNumbers
 const doubleNumbers = (numbers) => {
    for(let i=0; i <numbers.length; i++ ){
        numbers[i]= numbers[i]*2;
    }
    return numbers;
}

// Example usage:
console.log("15. the  doubleNumbers is :");
console.log( doubleNumbers([8,9,6]) ) // Output : [16, 18, 12]