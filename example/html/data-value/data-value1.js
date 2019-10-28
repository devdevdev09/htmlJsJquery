$(function(){
    $("#div1").html(getTemplate());

    $(document).on("click", "#div1>button", btnClick1);
});

function getTemplate(){
    const template = [];

    for(let i = 0; i < 5; i++){
        template.push('<button value="test-' + (i+1) + '">test' + (i+1) + '</button>');
    }
    
    return template.join("");
}

function btnClick1(){
    alert($(this).attr("value") + " : div1");
}

