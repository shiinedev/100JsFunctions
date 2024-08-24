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
console.log("12. the BigestNumber : "+bigestNumber); // Output : 42

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
console.log("13. the LongestString is : " + longestString) // Output : Washington, D.C.

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
 console.log("14. the everyNPositions : "+nPositions); // Output : Wfoo e

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

// 16 mostRepetitions
const mostRepetitions=(string1, string2, letter) => {
    let count1 = 0;
    let count2 = 0;
    for(let str of string1){
        str == letter && count1++;
    }
    for(let str of string2){
        str == letter && count2++;
    }
    return count1 >= count2 ? string1:string2;
    
}
// Example usage:
let repatition =mostRepetitions("Los Angeles","Texas","s");
console.log("16. the most Repetitions word of letter S is : " + repatition);// Output : Los Angeles

// 17 getMillisecondsBetween
const getMillisecondsBetween = (date1, date2)  =>{
    let date1Milliseconds = date1.getTime();
     let date2Milliseconds= date2.getTime();
    
    if(date1Milliseconds > date2Milliseconds){
        return date1Milliseconds - date2Milliseconds;
    }else{
        return date2Milliseconds - date1Milliseconds;
    }
    
}
// Example usage:

let millisecondsBetween = getMillisecondsBetween(new Date(" Fri May 07 2021 15:41:00 GMT+0300 (East Africa Time)"),
new Date("Fri May 17 2021 15:41:00 GMT+0300 (East Africa Time)"))
console.log("17. the MilliSecond  Between two dates :"+millisecondsBetween); // Output :

// 18 getMonthOfTheYear
const getMonthOfTheYear = (date) => {
    const months = ["January","February","March","April","May","June",
    "July","August","September","October","November","December"];
    return months[date.getMonth()]
}
// Example usage:
let date =getMonthOfTheYear( new Date());
console.log("18 .the Month Of TheYear is :" + date) // Output : August

//19 addDays
const addDays = (initialDate, daysCount) => {
    const millisecond =initialDate.getTime();
    const millisecond_in_Day =24*60*60*1000;
    return new Date(millisecond + millisecond_in_Day * daysCount);
}
// Example usage:

let newDate=addDays(new Date(),5).toString();
console.log(`19. after added 5 days : ${newDate}`); //output : The current  date Plus 5 days


//20getDevelopers
const getDevelopers = (employees) => {
    let res=[];
    for(let emp of employees){
        if(emp.job === "developer"){
           res.push(emp)
             
        }
    }
    return res;
}

// Example usage:
let developers =getDevelopers([{age: 28,job: "manegar", name: "Alice"},{age: 28,job: "developer",name: "shiine"},
                             {age: 28,job: "designer",name: "Bob"},{age: 28,job: "developer",name: "carab"}])
console.log("20. the developers is : " ,developers)//output [{age: 28,job: "developer",name: "shiine"}.{age: 28,job: "developer",name: "carab"}]