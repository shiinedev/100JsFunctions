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