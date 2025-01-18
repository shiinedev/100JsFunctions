// 11 areAllNumbersEven

const areAllNumbersEven = (numbers) =>{
    let isEven = true;
    for(let even  of  numbers){
        if(even % 2 == 0){
        isEven = true;
    }
    else{
        isEven= false;
        break;
    }
   
}
 return isEven;
}

// Example usage:
let evenNumbers = areAllNumbersEven([4,6,-8,14]);
console.log("11. areAllNumbersEven : " + evenNumbers);  // Output : True