'use strict';

$(function(){
    var divBtn1 = $('#btn1');
    var divBox1 = $('#box1');
    var divBtn2 = $('#btn2');
    var divBox2 = $('#box2');
    var divBtn3 = $('#btn3');
    var divBox3 = $('#box3');
    
    divBtn1.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box_red');
    });

    divBtn2.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box_green');
    });

    divBtn3.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box_blue');
    });

});
