$(document).ready(function(){
    function shuffle(array){
        array.sort(() => Math.random() - 0.5);
    }
    
    var name;
    var days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    var item;
    
    shuffle(days);
    
    console.log(days);
    
    for (var i = 0; i < 24; i++){
        name = "#a" + String(i + 1);
        item = String(days[i]);
        console.log(name);
        $(name).text(item);
    }
});