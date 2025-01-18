//3  concat3
const  concat3= (string1, string2, string3, separator) => {
    let concat= string1+separator+string2+separator+string3;
    return concat;
}
// Example usage:
let concat= concat3("HTML","CSS","JAVASCRIPT",",");
console.log("3. Concat3 : "+concat); // output HTML,CSS,JAVASCRIPT