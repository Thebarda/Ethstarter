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
        if(titreCampagne.trim()!=="" && description.trim()!=="" && descriptionCourte.trim()!=="" && datepicker.trim()!=="" && objectif.trim()!==""){
            var objTmp = parseFloat(objectif);
            if(!isNaN(objTmp) || objTmp > 0.0){
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
                        montantActuel: 0
                    }
                }).done(function (html) {
                    Materialize.toast("Félicitation! Votre Campagne est en cours de validation :)", 3200);
                    setTimeout(function () {
                        location.href = "/";
                    }, 3200);

                });
            }else{
                $("#error").text("Le montant doit être supérieur à 0");
            }
        }else{
            $("#error").text("Tous les champs doivent être remplis");
        }
    });

});



