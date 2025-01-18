// 22.isSorted
const isSorted = (numbers) => {
    let isSortedAscending = true;
    let isSortedDescending = true;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        isSortedAscending = false;
      }
      if (numbers[i] < numbers[i + 1]) {
        isSortedDescending = false;
      }
    }
    return isSortedAscending || isSortedDescending;
  };
  
  console.log(isSorted([8, 10, 11, 13, 15])); //true