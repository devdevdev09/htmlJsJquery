$(function(){
    $("#div2").html(getTemplate());

    $(document).on("click", "#div2>button", btnClick2);
});

function getTemplate(){
    const template = [];

    for(let i = 0; i < 5; i++){
        template.push('<button value="test-' + (i+1) + '"');
        template.push(' data-btn-width="200"');
        template.push('">test' + (i+1));
        template.push('</button>');
    }
    
    return template.join("");
}

function btnClick2(){
    alert("data() !!" + $(this).data('btn-width'));
    alert("attr() !!" + $(this).attr('data-btn-width'));
    alert("data camel() !!" + $(this).data('btnWidth'));
    alert("dataset() !!" + $(this)[0].dataset.btnWidth);
}

