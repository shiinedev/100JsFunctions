//10 canDriveCar
const canDriveCar =(user, car)  =>{
    let userCanDriveCar= false;
    if(user.age >= 18 || car.engineSize < 1000 ){
        return userCanDriveCar = true;
    }
    else{
       userCanDriveCar = false;
    }
        
    return userCanDriveCar
    
}
let userDrive={name:"Jon Doe",age:21}
let car ={engineSize:1200,name:"Mazda 3"}
let userCanDriveCar = canDriveCar(userDrive,car)
console.log("10.  the userCanDriveCar : " + userCanDriveCar)  // Output: True