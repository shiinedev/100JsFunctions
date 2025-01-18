//24.isSameDay
const isSameDay = (date1, date2) => {
    if (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date1.getMonth() &&
      date1.getDate() === date1.getDate()
    ) {
      return true;
    }
  
    return false;
  };
  // Example usage:
  
  console.log(
    isSameDay(
      new Date("Date Mon Jun 19 2017 13:00:00 GMT+0300 (GMT+03:00)"),
      new Date("Date Mon Jun 19 2017 14:00:00 GMT+0300 (GMT+03:00)")
    )
  ); // true