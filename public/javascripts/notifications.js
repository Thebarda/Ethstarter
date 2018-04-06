$(document).ready(function () {
    $('.tooltipped').tooltip('enterDelay', 0, 'inDuration', 150);
    $('.tabs').tabs();
    $('.modal').modal();
    
    var idReceipient;


    $("#sendButton").on("click", function () {
        console.log("Message sent " + $("#messageTitle").val() + "!");
        $.ajax({
            url: '/writeMessage',
            method: 'POST',
            data: {
                msgRecipient: idReceipient,
                msgTitle: $("#messageTitle").val(),
                msgBody: $("#messageBody").val()
            }
        });
    });

    $('.msgdel').click(function (e) {
        e.preventDefault();
        var m = $(this).attr("idDM");
        $(this).parent().parent().parent().hide("slow");

        $.ajax({
            url: '/deleteMessage',
            method: 'POST',
            data: { messageID: m }
        });
    });

    $('#replybutton').on('click', function (e){
        e.preventDefault();
        alert("clicked");

        var i = $(this).attr("senderid");
        var s = $(this).attr("sendername");
        var t = "RE: " + $(this).attr("title");

        console.log(s,t,i);

        $('#userAuto').val(s);
        $('#messageTitle').val(t);
        $('#userAuto').prop('disabled', true);
        idReceipient = i;
    });

    $(function () {
        $.ajax({
            type: 'GET',
            url: '/users',
            success: function (response) {
                var users = response;
                //Object.keys(usernull).map((x) => usernull[x] = null);
                //console.log(users);

                $("#userAuto").autocomplete({
                    data: users,
                    limit: 10, 
                    onAutocomplete: function(val) {
                        idReceipient = users[val];
                    },
                });
            }
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