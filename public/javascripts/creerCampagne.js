$(document).ready(function () {
    $('select').material_select();
    var d = new Date();

    $('.datepicker').pickadate({
        min: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        format: "yyyy-mm-dd",
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });
    //BBcode Jquery

    var BBbuttons = {
        buttons: "bold,italic,underline,sup,sub,|,img,video,link,|,bullist,numlist,|,fontcolor,fontsize,fontfamily,|, justifyleft, justifycenter,justifyright,|, quote,table"
    }
    $("#presentation").wysibb(BBbuttons);


    $("#submit").on("click", function () {
        var titreCampagne = $("#titreCampagne").val();
        var presentation = $(".wysibb-text-editor").html();
        var datepicker = $("#datepicker").val();
        var objectif = $("#objectif").val();
        $.ajax({
            url: "/validationCampagne",
            method: "post",
            data: {
                nomCampagne: titreCampagne,
                description: presentation,
                dateLimite: datepicker,
                but: objectif,
                estEnCours: 1,
                montantActuel: 0
            }
        }).done(function (html) {
            Materialize.toast("Votre Campagne est en cours de validation :)", 3200);
            setTimeout(function () {
                location.href = "/";
            }, 3200);

        });
    });

});



