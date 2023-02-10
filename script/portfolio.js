$(document).ready(function(){
    $(".card").click(function(){
        $(".card").children().toggle();
    });

    $(".project").click(function(){
        $(".project").css("background-color","blue")
    });
});
