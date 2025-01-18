
// 9 getUserObject
const getUserObject =(firstName, lastName, age) => {
    let UserObject ={
        age:age,
        name: firstName +" " + lastName
    }
    return UserObject;
}
// Example usage:
let user =getUserObject("jon","doe",31)
console.log(`9. ${user}` ); // Outpu  {age: 31, name: "jon doe"}