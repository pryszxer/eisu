(function () {

    'use strict'
    
    // =============================================
    // EVENT:index.show
    // =============================================
    kintone.events.on('app.record.index.show', function(event) {
       var records = event.records;
       var bgColor = '#fff8dc';
       var elColor = kintone.app.getFieldElements('color');
       var elCount = kintone.app.getFieldElements('count');
       
       for (var i = 0; i < elColor.length; i++) {
            var record = records[i];
            elColor[i].style.backgroundColor = bgColor;
            
            switch (record.color.value) {
                case 'red':
                    elColor[i].style.color = '#ff0000';
                    break;
                case 'blue':
                    elColor[i].style.color = '#0000ff';
                    break;
                default:
                    elColor[i].style.color = '#ffff00';
                    break;
            }
            
            if (Number(record.count.value) >= 20) {
                elCount[i].style.color = '#ff0000';
                elCount[i].style.fontWeight = 'bold';
            }
        }
        return event;
    });
    
    // =============================================
    // EVENT:detail.show
    // =============================================
    kintone.events.on('app.record.detail.show', function(event) {
        var records = event.records;
        
        var elColor = kintone.app.record.getFieldElement('color');
        if (recor.color.value === "red") {
            elColor.style.color = '#ff0000';
            elColor.style.fontWeight = 'bold';
        }    
        return event;
    });
    
})();    