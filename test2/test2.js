'use strict';

$(function(){
    var divcalc_area = $('#calc_area');
    var divsign = $('#sign');
    var divparam = $('#param');
    var divope = $('#ope');
    var divcalc = $('#calc');
    var divresult = $('#result');
    var divclear = $('#clear');
    
    divsign.on('click', function () {
    $(this).text('-');
    
});

sign.on('click', function () {
    switch ($(this).text() {
        case '+':
    $(this).text('-');
    break;
    