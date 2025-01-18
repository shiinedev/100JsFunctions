// 29.flipObject
const flipObject = (people) => {
    let result = {};
    for (let person in people) {
      let key = people[person];
      if (result[key]) {
        result[key].push(person);
      } else {
        result[key] = [person];
      }
    }
    const sortedData = Object.keys(result)
      .sort()
      .reduce((acc, key) => {
        acc[key] = result[key];
        return acc;
      }, {});
    console.log(sortedData);
  };
  
  // Example usage:
  const people = {
    jon: "Java Developer",
    jane: "JavaScript Developer",
    bob: "JavaScript Developer",
    sam: "Java Developer",
    tom: "ML Engineer",
    diana: "Software Engineer",
  };
  
  flipObject(people);
  //output
  // {"JS Developer":["bob","jon"],"AI Engineer":["alice"],"UX Designer":["nick"]}