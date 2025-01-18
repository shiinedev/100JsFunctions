// 13 getLongestString
const getLongestString = (arrayOfStrings) => {
    let longestString = "";
    for (let string of arrayOfStrings){
        if( string.length > longestString.length){
            longestString = string;
        }
        
    }
    return longestString;
}

// Example usage:
let longestString = getLongestString(["Montgomery", "Juneau"
    , "Phoenix","Little Rock", "Sacramento", "Denver"
    , "Washington, D.C.", "Hartford", "Dover","Tallahassee"])
console.log("13. the LongestString is : " + longestString) // Output : Washington, D.C.
