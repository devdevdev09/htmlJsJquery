$("#test>button").click(function(){
    $(this).text("click");
    $("#test>button").not(this).text("unclick");
});