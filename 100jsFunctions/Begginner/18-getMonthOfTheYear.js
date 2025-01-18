// 18 getMonthOfTheYear
const getMonthOfTheYear = (date) => {
    const months = ["January","February","March","April","May","June",
    "July","August","September","October","November","December"];
    return months[date.getMonth()]
}
// Example usage:
let date =getMonthOfTheYear( new Date());
console.log("18 .the Month Of TheYear is :" + date) // Output : August