'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    var divBase = $("#base");

    var divButton = $("<div>", { "id": "button", "class": "button"});
    divButton.text('CHANGE COLOR');


    divBase.append(divButton);

    var clickcount = 0;

    // ---------------------------
    // EVENT
    // ---------------------------
    divButton.on('click', function(){
        // ---- クリックされたら, 何回で実行
        clickcount = clickcount + 1;

        
        // ---- Change Color
        //var clickCountForColor = clickcount % 3;
        
        //divButton.text('久米淳也 万歳日本' + clickcount);
        
        //if (clickcount == 1){
            //divButton.css({"background-color": "#0000ff"});
        //} else if (clickcount == 2){
            //divButton.css({"background-color": "#00ff00"});
        //} else { divButton.css({"background-color": "#ff0000"});
        //clickcount = 0;
        //}

        divButton.css({"background-color": "#0000ff"});
        divButton.css({"color": "#00ffff"});
        
    });
        
});