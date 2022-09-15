$(document).ready(function() {

    function goLeft() {
        $("#bug").animate({left: "-=300"}, 1500, "swing", goRight);
    }
    
    function runningRight() {
        $("#bug").animate({left: "+=300"}, 1500, "swing", goLeft);
    }
    
    goRight();});
    