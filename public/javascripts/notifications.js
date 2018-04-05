$(document).ready(function(){
    $('.tooltipped').tooltip('enterDelay', 0, 'inDuration', 150);
    $('.tabs').tabs();
    $('.modal').modal();
    $('.fixed-action-btn').floatingActionButton();

    $('#sendButton').on('click', () => {
        $.ajax({
            url: '/writeMessage',
            method: 'POST',
            data: {
                msgRecipient: $("#messageRecipient").text(),
                msgBody: $("#messageTitle").text(),
                msgContent: $("#messageBody").text()
            } 
        });
        console.log("Message sent");
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