'use strict';

$(function(){
    var divBase = $("#base");

    var arrayButton = []; 

  
    for (var buttonNumber = 0; buttonNumber < 21; buttonNumber++) {

        var divButton = $("<div>", { "id": "button" + buttonNumber, "class": "button"});
        divButton.text("button" + buttonNumber);

        divButton.on('click', function () {
           alert("Click !" + $(this).text());
        });

        arrayButton[buttonNumber] = divButton;
    }
    console.info(arrayButton);

    arrayButton.forEach(function (button) {
        divBase.append(button);
    });

});
