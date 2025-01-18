// 14 everyNPositions
const everyNPositions = (message, step) => {
    let count = 0;
    let position= "";
 
   do {
     position += message.charAt(count);
     count +=step ;
    }while(message.charAt(count)) 
 
     return position;
 }

//  Example usage:
 let nPositions =  everyNPositions("Which framework should I choose?",6 ) 
 console.log("14. the everyNPositions : "+nPositions); // Output : Wfoo e
