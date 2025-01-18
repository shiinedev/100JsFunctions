//19 addDays
const addDays = (initialDate, daysCount) => {
    const millisecond =initialDate.getTime();
    const millisecond_in_Day =24*60*60*1000;
    return new Date(millisecond + millisecond_in_Day * daysCount);
}
// Example usage:

let newDate=addDays(new Date(),5).toString();
console.log(`19. after added 5 days : ${newDate}`); //output : The current  date Plus 5 days