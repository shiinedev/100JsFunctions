
//6 getGasolineAmount
const getGasolineAmount = (distance, consumptionPer100Km) => {
    let res =distance * consumptionPer100Km /100;
    return res*2;
}
// Example usage:
let GasolineAmount =getGasolineAmount(128,6.4)
console.log("6. the gasoline amount : "+GasolineAmount); // Output: 16.384