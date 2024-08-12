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
console.log("areAllNumbersEven : " + evenNumbers);  // Output : True

// 12  getBiggestNumberInArrays
const getBiggestNumberInArrays = (numbers1, numbers2) => {
    let maxNum = numbers1[0];
    for( let num1 of numbers1){
        if(num1 > maxNum){
            maxNum = num1;
        }
        }
        for(let num2 of numbers2){
            if(num2 > maxNum){
                maxNum = num2;
            }
        }
    return maxNum;
}
let bigestNumber = getBiggestNumberInArrays([9,2,9],[13,28,42]);
console.log("the BigestNumber : "+bigestNumber); // Output : 42

// 13 getLongestString
const getLongestString = (arrayOfStrings) => {
    let longestString = "";
    for (let string of arrayOfStrings){
        if( string.length > longestString.length){
            longestString = string;
        }
        
    }
    return longestString;
}

// Example usage:
let longestString = getLongestString(["Montgomery", "Juneau"
    , "Phoenix","Little Rock", "Sacramento", "Denver"
    , "Washington, D.C.", "Hartford", "Dover","Tallahassee"])
console.log( "the LongestString is : " + longestString) // Output : Washington, D.C.

// 14 everyNPositions
const everyNPositions = (message, step) => {
    let count = 0;
    let position= "";
 
   do {
     position += message.charAt(count);
     count +=step ;
    }while(message.charAt(count)) 
 
     return position;
 }

//  Example usage:
 let nPositions =  everyNPositions("Which framework should I choose?",6 ) 
 console.log("the everyNPositions : "+nPositions); // Output : Wfoo e

 // 15 doubleNumbers
 const doubleNumbers = (numbers) => {
    for(let i=0; i <numbers.length; i++ ){
        numbers[i]= numbers[i]*2;
    }
    return numbers;
}

// Example usage:
console.log(" the  doubleNumbers is :");
console.log( doubleNumbers([8,9,6]) ) // Output : [16, 18, 12]

