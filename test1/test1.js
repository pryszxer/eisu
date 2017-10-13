'use strict';

$(function(){
    var divBtn1 = $('#btn1');
    var divBtn2 = $('#btn2');
    var divBtn3 = $('#btn3');
    var divBox = $('#box');
    
    divBtn1.on('click', function () {
       divBox.css({'width': '50px', 'height': '50px', 'background-color': '#FF0000'});
    });
    
    divBtn2.on('click', function () {
       divBox.css({'width': '50px', 'height': '50px', 'background-color': '#00FF00'});
    });    
    
    divBtn3.on('click', function () {
       divBox.css({'width': '50px', 'height': '50px', 'background-color': '#0000FF'});
    });    
    
});