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
let biggestNumber = getBiggestNumberInArrays([9,2,9],[13,28,42]);
console.log("12. the BiggestNumber : "+biggestNumber); // Output : 42