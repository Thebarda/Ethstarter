$(document).ready(function () {
    $('.tooltipped').tooltip('enterDelay', 0, 'inDuration', 150);
    $('.tabs').tabs();
    $('.modal').modal();

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

/*     $(function () {
        $("#userAuto").autocomplete({
            data: {
                "Apple": null,
                "Microsoft": null,
                "Google": 'http://placehold.it/250x250'
            },
            limit: 10, // The max amount of results that can be shown at once. Default: Infinity.
            onAutocomplete: function (val) {
                // Callback function when value is autcompleted.
            },
            minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
        });
    }); */

//  https://stackoverflow.com/questions/39883425/materialize-autocomplete-with-dynamic-data-in-jquery-ajax

//Autocomplete
/*     $(function () {
    $.ajax({
        type: 'GET',
        url: 'https://restcountries.eu/rest/v2/all?fields=name',
        success: function (response) {
            var countryArray = response;
            var dataCountry = {};
            for (var i = 0; i < countryArray.length; i++) {
                dataCountry[countryArray[i].name] = i; //countryArray[i].flag or null
            }
            
            $("#userAuto").autocomplete({
                data: dataCountry,
                limit: 10, // The max amount of results that can be shown at once. Default: Infinity.
                onAutocomplete: function(val) {
                    idReceipient = dataCountry[val];
                },
            });
        }
    });
}); */


    var idReceipient;
    $(function () {
        $.ajax({
            type: 'GET',
            url: '/users',
            success: function (response) {
                var users, usernull = response;
/*                 Object.keys(usernull).map((x) => usernull[x] = null);
                console.log(users); */

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