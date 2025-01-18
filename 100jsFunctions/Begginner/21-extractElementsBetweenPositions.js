// 21.extractElementsBetweenPositions
const extractElementsBetweenPositions = (numbers, n, m) => {
    let newArray = [];
    if (n < m) {
      for (let i = n; i <= m; i++) {
        newArray.push(numbers[i]);
      }
    } else {
      for (let i = m; i <= n; i++) {
        newArray.push(numbers[i]);
      }
    }
    return newArray;
  };
  
  // Example usage:
  console.log(
    extractElementsBetweenPositions(
      [8, 33, 19, 56, 91, 3, 28, 12, -10, 24, 7, 42, 1550, 67],
      6,
      2
    )
  ); //[ 19, 56, 91, 3, 28 ]