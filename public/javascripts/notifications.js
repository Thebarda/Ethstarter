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
                msgRecipient: "51", //$("#messageRecipient").val(),
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

/*     $(document).ready(function () {
        //Autocomplete
        $(function () {
            $.ajax({
                type: 'GET',
                url: 'https://restcountries.eu/rest/v2/all?fields=name',
                success: function (response) {
                    var countryArray = response;
                    var dataCountry = {};
                    for (var i = 0; i < countryArray.length; i++) {
                        //console.log(countryArray[i].name);
                        dataCountry[countryArray[i].name] = countryArray[i].flag; //countryArray[i].flag or null
                    }

                    $("#userAuto").autocomplete({
                        data: dataCountry,
                        limit: 10, // The max amount of results that can be shown at once. Default: Infinity.
                    });
                }
            });
        });
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