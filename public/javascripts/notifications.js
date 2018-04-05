$(document).ready(function(){
    $('.tooltipped').tooltip('enterDelay', 0, 'inDuration', 150);
    $('.tabs').tabs();
    $('.modal').modal();
    
    $('input.autocompleteMess').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });
    
});

function searchFunc(e) {
    $(document).ready(() => {
        console.log('salut');
        var search = e.target.value;
        $(".textNotifs").each(function () {
            if ($(this).children().text().includes(search)) {
                $(this).show(200);
            } else {
                $(this).hide(200);
            }
        });
    });
}

var searchMessage = (e) => {
    return "SHIIIET"
}

$('#sendButton').click(function() {
        $(document).ready(function(){
        console.log("Message sent" + $("#messageTitle").text());
        $.ajax({
            url: '/writeMessage',
            method: 'POST',
            data: {
                msgRecipient: $("#messageRecipient").text(),
                msgBody: $("#messageTitle").text(),
                msgContent: $("#messageBody").text()
            } 
        });
    });
});