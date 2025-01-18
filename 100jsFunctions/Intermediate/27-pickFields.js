//27.pickFields
const pickFields = (data, fields) => {
    let object = {};
    fields.forEach((string) => {
      for (let key in data) {
        if (string == key) {
          object[string] = data[key];
        }
      }
    });
  
    return object;
  }
  
  // Example usage:
  console.log(
    pickFields(
      {
        color: "blue",
        name: "Earth",
        solarSystem: "Milky Way",
      },
      ["name", "color"]
    )
  ); // { name: 'Earth', color: 'blue' }