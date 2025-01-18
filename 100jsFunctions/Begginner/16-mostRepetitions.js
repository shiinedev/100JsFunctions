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
let repetition =mostRepetitions("Los Angeles","Texas","s");
console.log("16. the most Repetitions word of letter S is : " + repetition);// Output : Los Angeles