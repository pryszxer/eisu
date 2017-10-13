'use strict'

var total = 0;
var i = 0;
var use_number = 0;
total = i + use_number;


do {
    console.log(use_number + "+" + i + "=" + total);
    use_number=total;
    i++;

    
    total = use_number + i;
    

} while (total <=50);

