//25.getMaxMovingDistance

const getMaxMovingDistance = (budget, weight, cost) => {
    const costToMove1kgFor1Km = cost / 100 / 10;
    const costAllFurnitureFor1km = weight * costToMove1kgFor1Km;
  
    return budget / costAllFurnitureFor1km;
  };
  
  // Example usage:
  const res = getMaxMovingDistance(700, 440, 50);
  console.log(res); //31.818181818181817
  
  //26.arrayToObject
  const arrayToObject = (strings) => {
    let result = {};
    strings.map((str, index) => {
      result[str] = index;
    });
    console.log(result);
  }
  
  // Example usage:
  arrayToObject(["JavaScript", "is", "awesome"]); //{ JavaScript: 0, is: 1, awesome: 2 }