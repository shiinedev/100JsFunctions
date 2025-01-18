// 26.arrayToObject

const arrayToObject = (strings) => {
    let result = {};
    strings.map((str,index) =>{
        if(!result.hasOwnProperty(str))
        result[str] = index;
    });
    console.log(result)
  }
  
  //EXample usage
  arrayToObject(
    ["My","name","is","shiinedev",".","What","is","your","name","?"]
  ) 
  //output
  //{   My: 0, name: 1, is: 2, shiinedev: 3,  '.': 4, What: 5, your: 7,'?': 9 }