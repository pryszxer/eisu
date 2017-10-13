'use strict';

$(function(){
    var divBase = $("#base");

    var arrayButton = []; //ボタンを貯めておく配列を作る

    // ---- ボタンの数だけ繰り返す
    for (var buttonNumber = 0; buttonNumber < 21; buttonNumber++) {
        // ---- ボタンを作る
        var divButton = $("<div>", { "id": "button" + buttonNumber, "class": "button"});
        divButton.text("button" + buttonNumber);
        // ---- Set event to button
        divButton.on('click', function () {
           alert("Click !" + $(this).text());
        });

        // ---- 作ったボタンを配列に入れる
        arrayButton[buttonNumber] = divButton;
    }
    console.info(arrayButton);

    // ---- 配列に入っているボタンに個別のスタイルをセット

    // ---- ボタンを表示する（baseにapend）
    // for (var buttonNumber = 0; buttonNumber < 21; buttonNumber++) {
    //     divBase.append(arrayButton[buttonNumber]);
    // }
    arrayButton.forEach(function (button) {
        divBase.append(button);
    });

});
