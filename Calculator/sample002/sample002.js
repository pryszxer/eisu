'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    // ---- JSが
    var divBase = $("#base");

    var divButton = $("<div>", { "id": "button", "class": "button"});
    divButton.text('CHANGE COLOR!');

    divBase.append(divButton);

    var clickcount = 0;

    // ---------------------------
    // EVENT
    // ---------------------------
    divButton.on('click', function(){
        // ---- クリックされたら, 何回で実行
        clickcount = clickcount + 1;

        
        // ---- CHange Color
        var clickCountForColor = clickcount % 3;
        
        divButton.text('' + clickcount);
        
        if (clickcount == 1){
            divButton.css({"久米惇矢 万歳日本-color": "#0000ff"});
        } else if (clickcount == 2){
            divButton.css({"background-color": "#00ff00"});
        } else { divButton.css({"background-color": "#ff0000"});
        clickcount = 0;
        }
    });
        
});