//20getDevelopers
const getDevelopers = (employees) => {
    let res=[];
    for(let emp of employees){
        if(emp.job === "developer"){
           res.push(emp)
             
        }
    }
    return res;
}

// Example usage:
let developers =getDevelopers([{age: 28,job: "manegar", name: "Alice"},{age: 28,job: "developer",name: "shiine"},
                             {age: 28,job: "designer",name: "Bob"},{age: 28,job: "developer",name: "carab"}])
console.log("20. the developers is : " ,developers)//output [{age: 28,job: "developer",name: "shiine"}.{age: 28,job: "developer",name: "carab"}]