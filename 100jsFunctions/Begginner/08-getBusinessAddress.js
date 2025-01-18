
//8 getBusinessAddress
const getBusinessAddress =(business) => {
    let concat = business.address.street + ","+" number "+ business.address.number + ", "+business.address.zipCode;
    return concat;
    
}
 // Example usage:
let business={
    address: 
    {
        number:3,
        street:"Avenuepark",
        zipCode: 123500
    },
    name:"100jsfunctions"
}
console.log("8. the BusinessAddress : "+getBusinessAddress(business)); //Avenuepark, number 3, 123500