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
    $("#datepicker").removeAttr("readOnly");
    //BBcode Jquery
    var BBbuttons = {
        buttons: "bold,italic,underline,sup,sub,|,img,video,link,|,bullist,numlist,|,fontcolor,fontsize,fontfamily,|, justifyleft, justifycenter,justifyright,|, quote,table"
    }
    $("#description").wysibb(BBbuttons);


    //Compteur caractere
    $("#descriptionCourte").keyup(function(){
        var nbreCaracteres = $(this).val().length;
        nbreCaracteres = 200 - nbreCaracteres ;
        var msg =  nbreCaracteres + "/200";
        $("#compteur").text(msg);
    });


    // requete Ajax envoie des données du formulaire dans la BDD
    $("#submit").on("click", function () {
        var titreCampagne = $("#titreCampagne").val();
        var description = $(".wysibb-text-editor").html();
        var descriptionCourte = $("#descriptionCourte").val();
        var datepicker = $("#datepicker").val();
        var objectif = $("#objectif").val();
        var objectifMax = $("#objectifMax").val();
        if(titreCampagne.trim()!=="" && description.trim()!=="" && description !=="<span></span>" && descriptionCourte.trim()!=="" && datepicker.trim()!=="" && objectif.trim()!=="" && objectifMax.trim()!==""){
            var objTmp = parseFloat(objectif);
            var objMaxTmp = parseFloat(objectifMax);
            if(!isNaN(objTmp) || objTmp > 0.0){
              if(!isNaN(objMaxTmp) && objMaxTmp > 0.0 && objMaxTmp > objTmp){
                $.ajax({
                    url: "/validationCampagne",
                    method: "post",
                    data: {
                        nomCampagne: titreCampagne,
                        description: description,
                        descriptionCourte: descriptionCourte,
                        dateLimite: datepicker,
                        but: objectif,
                        estEnCours: 1,
                        montantActuel: 0,
                        montantMax: objectifMax
                    }
                }).done(function (html) {
                    $('.modal').modal();
                    $('.modal').modal('open');
                    setTimeout(function () {
                        location.href = "/";
                    }, 3200);

                });
              }else{
                $("#error").text("L'objectif max doit être supérieur à l'objectif");
              }
            }else{
                $("#error").text("L'objectif doit être supérieur à 0");
            }
        }else{
            $("#error").text("Tous les champs doivent être remplis");
        }
    });

});
