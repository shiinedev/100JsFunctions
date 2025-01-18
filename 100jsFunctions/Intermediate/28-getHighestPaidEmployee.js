//28.getHighestPaidEmployee

const getHighestPaidEmployee = (employees, departmentId) => {
    let result = [];
    
  for(let emp of employees){
    
      if(emp.departmentId === departmentId){
          result.push(emp);
      }
  }
  if(result.length === 0){
      return undefined;
  }
  let employeeWitHighestPaid = result[0];
  for(let i = 1; i<result.length; i++){
      if(employeeWitHighestPaid.salary < result[i].salary){
          employeeWitHighestPaid = result[i];
      }
  }

  return employeeWitHighestPaid.name;
}
console.log(
    getHighestPaidEmployee([
        {"departmentId":"A504","name":"Alice","salary":7611},
        {"departmentId":"A110","name":"Bob","salary":9288},
        {"departmentId":"A504","name":"Charlie","salary":4109},
        {"departmentId":"A504","name":"David","salary":6100}],"A504")
    ); // Alice

