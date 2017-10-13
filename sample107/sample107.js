'use strict'


var result = 0;
for (var count = 1; count <=60; count++){
    result = count ;
    
        
        if((count % 3 === 0) && (count % 5 === 0)){
            console.log(result = count + "->fizz buzz");
        }
        else if (count % 3 === 0){
            console.log(result = count + "->fizz");
        }
        else if (count % 5 === 0){
            console.log(result = count + "->buzz");
        }   
        
    
    else result = result + "->";
    
    console.log(count);

}



