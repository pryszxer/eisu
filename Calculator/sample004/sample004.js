'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    var divBase = $("#base");

    var divButton = $("<div>", { "id": "button", "class": "button"});
    divButton.text('CHANGE COLOR!');

    var divSmallBox = $("<div>", { "id": "smallbox", "class": "smallbox"});
    divSmallBox.text('SMALL BOX');
    
    var divButton2 = $("<div>", { "id": "button2", "class": "button2"});
    divSmallBox.text('万歳日本');

    divBase.append(divButton);
    divBase.append(divSmallBox);
    divBase.append(divSButton2);

    // ---------------------------
    // EVENT
    // ---------------------------
    divButton.on('click', function(){
        
        divButton.css({"background-color": "#0000ff", "color": "#00ffff"});

    });
    
    divSmallBox.on('click', function(){
        
        divSmallBox.css({"background-color": "#ff0000", "color": "#00ff00", "width": "50px", "height": "50px"});

    });
    
    divButton2.on('click', function(){
        
        divButton2.css({"background-color": "#ff0000", "color": "#00ff00", "width": "100px", "height": "100px"});
    
    });

});