$(document).ready(function(){
    $('.tooltipped').tooltip('enterDelay', 0, 'inDuration', 150);
    $('.tabs').tabs();
    $('.modal').modal();
    
/*     $('input.autocompleteMess').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });      */ 

    $("#sendButton").on("click", function() {
        console.log("Message sent " + $("#messageTitle").val() + "!");
        $.ajax({
            url: '/writeMessage',
            method: 'POST',
            data: {
                msgRecipient: "51", //$("#messageRecipient").val(),
                msgTitle: $("#messageTitle").val(),
                msgBody: $("#messageBody").val()
            } 
        });
    });  
    
    $('.msgdel').click(function(e){
        e.preventDefault();
        var m = $(this).attr("idDM");
        $(this).parent().parent().parent().hide("slow");

        $.ajax({
            url: '/deleteMessage',
            method: 'POST',
            data: {messageID: m} 
        });        
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