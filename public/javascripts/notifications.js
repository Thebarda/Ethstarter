$(document).ready(function () {
    $('.tooltipped').tooltip('enterDelay', 0, 'inDuration', 150);
    $('.tabs').tabs();
    $('.modal').modal();
    
    var idReceipient;

    $("#sendButton").on("click", function () {
//        if ($("#val").valid()) {
            $.ajax({
                url: '/writeMessage',
                method: 'POST',
                data: {
                    msgRecipient: idReceipient,
                    msgTitle: $("#messageTitle").val(),
                    msgBody: $("#messageBody").val()
                }
            });
            $('#writeModal').modal('close');
//        }
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

    $("a[name='reply']").click(function(e) {
        e.preventDefault();

        var i = $(this).attr("senderid");
        var s = $(this).attr("sendname");
        var t = "RE: " + $(this).attr("title");

        $('#modalTitle').text('Répondre à ' + s);
        $('#userAuto').val(s);
        $('#messageTitle').val(t);
        $('#userAuto').prop('disabled', true);
        $('#messageBody').val('');
        $('label[for="userAuto"]').hide();
        Materialize.updateTextFields();
        idReceipient = i;
    });

    $("a[name='launchModal']").click(function(e) {
        e.preventDefault();

        $('#modalTitle').text('Envoyer un message privé');
        $('#userAuto').val('');
        $('#messageTitle').val('');
        $('#messageBody').val('');
        $('#userAuto').prop('disabled', false);
        $('label[for="userAuto"]').show();
        Materialize.updateTextFields();
        idReceipient = null;
    });

    //SEARCH MESSAGE
    $(".messCard").each(function () {
        var searchData = [
            $.trim($(this).find("#messTitle").text()),
            $.trim($(this).find("#messBody").text()),
            $.trim($(this).find("#messName").text())
        ];
        $(this).data("search", searchData.join(" ").toUpperCase());
    });

    $("#searchMess").keyup(function () {
        var val = $.trim(this.value).toUpperCase();

        $(".messCard").each(function () {
            var visible = !val || $(this).data("search").indexOf(val) > -1;
            $(this).toggle(visible);
        });
    });

    //AUTOCOMPLETE FOR USER'S NAME
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

/*  //VALIDATOR
    $.validator.setDefaults({
        errorClass: 'invalid',
        validClass: "valid",
        errorPlacement: function (error, element) {
            $(element)
                .closest("form")
                .find("label[for='" + element.attr("id") + "']")
                .attr('data-error', error.text());
        },
        submitHandler: function (form) {
            console.log('form ok');
        }
    });

    $('#val').validate({ 
        rules: {
            rcp: {
                required: true,
            },
            ttl: {
                required: true,
            },
            bdy: {
                required: true
            }
        },
        submitHandler: function (form) {
            console.log('valid');
        }
    }); */

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