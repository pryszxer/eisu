'use strict';

$(function(){
    
    // ---------------------------
    // DEFINE
    // ---------------------------
    var dispParamA = '';
    var dispParamB = '';
    var dispOpe = '';
    var dispAns = '';
    
    var paramA = 0;
    var paramB = 0;
    
    var ans = 0;

    
    //DOM

    var $divCalcPos = $("#calc");
    var s1=0;
    var s2=0;
    var check;
    
    var $divBtn1 = $("<div>", { "id": "Btn1", "class": "Btn1"});
    $divBtn1.text('7');

    var $divBtn2 = $("<div>", { "id": "Btn2", "class": "Btn2"});
    $divSample2.text('8');
    
    var $divBtn3 = $("<div>", { "id": "Btn3", "class": "Btn3"});
    $divBtn3.text('9');

    var $divBtn4 = $("<div>", { "id": "Btn4", "class": "Btn4"});
    $divBtn4.text('.');
    
    var $divBtn5 = $("<div>", { "id": "Btn5", "class": "Btn5"});
    $divBtn5.text('+/-');

    var $divBtn6 = $("<div>", { "id": "Btn6", "class": "Btn6"});
    $divBtn6.text('BS');

    var $divBtn7 = $("<div>", { "id": "Btn7", "class": "Btn7"});
    $divBtn7.text('CE'); 
    
    var $divBtn8 = $("<div>", { "id": "Btn8", "class": "Btn8"});
    $divBtn8.text('AC');  
    
    var $divBtn9 = $("<div>", { "id": "Btn9", "class": "Btn9"});
    $divBtn9.text('4');  
    
    var $divBtn10 = $("<div>", { "id": "Btn10", "class": "Btn10"});
    $divBtn10.text('5');      
    
    var $divBtn11 = $("<div>", { "id": "Btn11", "class": "Btn11"});
    $divBtn11.text('6');      
    
    var $divBtn12 = $("<div>", { "id": "Btn12", "class": "Btn12"});
    $divBtn12.text('0');    
    
    var $divBtn13 = $("<div>", { "id": "Btn13", "class": "Btn13"});
    $divBtn13.text('+');  
    
    var $divBtn14 = $("<div>", { "id": "Btn14", "class": "Btn14"});
    $divBtn14.text('-');   
    
    var $divBtn15 = $("<div>", { "id": "Btn15", "class": "Btn15"});
    $divBtn15.text('x');     
    
    var $divBtn16 = $("<div>", { "id": "Btn16", "class": "Btn16"});
    $divBtn16.text('/');     
    
    var $divBtn17 = $("<div>", { "id": "Btn17", "class": "Btn17"});
    $divBtn17.text('1');     
    
    var $divBtn18 = $("<div>", { "id": "Btn18", "class": "Btn18"});
    $divBtn18.text('2');  
    
    var $divBtn19 = $("<div>", { "id": "Btn19", "class": "Btn9"});
    $divBtn19.text('3'); 
    
    var $divBtn20 = $("<div>", { "id": "Btn20", "class": "Btn20"});
    $divBtn20.text('000');       
    
    var $divBtn21 = $("<div>", { "id": "Btn21", "class": "Btn21"});
    $divBtn21.text('=');   
    
    var $divSample22 = $("<div>", { "id": "Btn22", "class": "Btn22"});
    $divSample22.text("シンプル電卓");
    
 
    var $divDisplay1 = $("<div>", { "id": "display1", "class": "display1"});
    $divDisplay1.text('');
    
    var $divParam

    var $divBtn7 =
    
    $divCalcPos.append($divSample1);
    $divCalcPos.append($divSample2);
    $divCalcPos.append($divSample3);
    $divCalcPos.append($divSample4);
    $divCalcPos.append($divSample5);
    $divCalcPos.append($divSample6);
    $divCalcPos.append($divSample7);
    $divCalcPos.append($divSample8);
    $divCalcPos.append($divSample9);
    $divCalcPos.append($divSample10);
    $divCalcPos.append($divSample11);
    $divCalcPos.append($divSample12);
    $divCalcPos.append($divSample13);
    $divCalcPos.append($divSample14);
    $divCalcPos.append($divSample15);
    $divCalcPos.append($divSample16);
    $divCalcPos.append($divSample17);
    $divCalcPos.append($divSample18);
    $divCalcPos.append($divSample19);
    $divCalcPos.append($divSample20);
    $divCalcPos.append($divSample21);
    $divCalcPos.append($divSample22);
    $divCalcPos.append($divDisplay1);
    
    $divBtn1.on('click', function(){
     msg += '7';
    $divDisplay1.text (msg); });
    
    $divBtn2.on('click', function(){
     msg += '8';
    $divDisplay2.text (msg); });
    
    $divBtn3.on('click', function(){
     msg += '9';
    $divDisplay3.text (msg); });
    
    $divBtn4.on('click', function(){
     msg += '.';
    $divDisplay4.text (msg); });
    
    $divBtn5.on('click', function(){
     msg += '+/-';
    $divDisplay5.text (msg); });
    
    $divBtn6.on('click', function(){
     msg += 'BS';
    $divDisplay6.text (msg); });
    
    $divBtn7.on('click', function(){
     msg += 'CE';
    $divDisplay8.text (msg); });
    
    $divBtn8.on('click', function(){
     msg += 'AC';
    $divDisplay8.text (msg); });
    
    $divBtn9.on('click', function(){
     msg += '4';
    $divDisplay9.text (msg); });
    
    $divBtn10.on('click', function(){
     msg += '5';
    $divDisplay10.text (msg); });
    
    $divBtn11.on('click', function(){
     msg += '6';
    $divDisplay11.text (msg); });
    
    $divBtn12.on('click', function(){
     msg += '0';
    $divDisplay12.text (msg); });
    
    
    
    //EVENT
    
    var msg ='';
    var currentNumber = '';
    $divBtn1.on('click', function(){
       msg += $divBtn2.text();
       currentNumber += $divBtn2.text();
    $divDisplay.text(msg);
       // s1 = Number($divBtn1)
       
});