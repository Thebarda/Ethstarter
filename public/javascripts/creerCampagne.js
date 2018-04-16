$(document).ready(function () {
    $('select').material_select();
    $(".tooltiped").tooltip({delay: 10});
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
                  let errorCP = false;
                  $(".CP").each(function() {
                      if(!errorCP) {
                          if ($(this).children("#cpError").text() !== "" || $(this).children("#cpErrorMontant").text() !== "") {
                              errorCP = true;
                          }
                      }
                  });
                if(!errorCP) {
                    $('.modal').modal('open');
                    $("#error").text("");

                    var fd = new FormData();
                    fd.append('nomCampagne', titreCampagne);
                    fd.append('description', description);
                    fd.append('descriptionCourte', descriptionCourte);
                    fd.append('dateLimite', datepicker);
                    fd.append('but', objectif);
                    fd.append('estEnCours', 1);
                    fd.append('montantActuel', 0);
                    fd.append('montantMax', objectifMax);

                    var img = $('#coverimg')[0].files[0];
                    fd.append('coverimg', img); 

                    for (var p of fd) {
                        console.log(p);
                    }

                    $.ajax({
                        url: '/validationCampagne',
                        data: fd,
                        processData: false,
                        contentType: false,
                        type: 'POST'

/*                      url: "/validationCampagne",
                        method: "post",
                        data: {
                            nomCampagne: titreCampagne,
                            descriptionCourte: description,
                            descriptionCourte: descriptionCourte,
                            dateLimite: datepicker,
                            but: objectif,
                            estEnCours: 1,
                            montantActuel: 0,
                            montantMax: objectifMax,
                        } */

                      }).done(function (html) {
                          var idCampagne = $(html).filter("#emptyView").text();
                          $(".CP").each(function () {
                              if (!($(this).children("#cpError").text() !== "" || $(this).children("#cpErrorMontant").text() !== "")) {
                                  var descriptionCP = $(this).children("div").children("#cp")[0].value;
                                  var montant = $(this).children("div").children("#montantCP")[0].value;
                                  $.ajax({
                                      url:'/addContrepartie',
                                      method:'post',
                                      async: true,
                                      data: {montant: montant, idCampagne: idCampagne, descriptionCP: descriptionCP}
                                  }).done(()=>{})
                              }
                          });
                          $('.modal').modal('close');
                          location.href="/";
                      });
                  } else {
                      $("#error").text("Veuillez remplir correctement les champs de la/des contre-partie(s)");
                  }
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

    $("#containerCP").append('<div class="CP row">\n' +
        '                                <h5>Contre-partie</h5>\n' +
        '                                <div class="input-field col s2">\n' +
        '                                    <input onkeypress="checkInputOnChange(event)" type="text" id="montantCP" name="montantCP" min="0">\n' +
        '                                    <label for="montantCP" data-error="wrong" data-success="right">Montant Contre-partie</label>\n' +
        '                                </div>\n' +
        '                                <div class="input-field col s9">\n' +
        '                                    <input onkeypress="checkInputOnChange(event)" type="text" id="cp" name="cp" min="0">\n' +
        '                                    <label for="cp" data-error="wrong" data-success="right">Contre-partie</label>\n' +
        '                                </div>\n' +
        '                                <a id="deleteCP" onclick="deleteCP(event)" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></a>\n' +
        '                                <br /><br /><p id="cpErrorMontant" class="red-text"></p> \n'+
        '                                <p id="cpError" class="red-text"></p> \n'+
        '                            </div>');
    $("#addCP").on('click', () => {
        $("#containerCP").append('<div class="CP row">\n' +
            '                                <h5>Contre-partie</h5>\n' +
            '                                <div class="input-field col s2">\n' +
            '                                    <input onkeypress="checkInputOnChange(event)" name="montantCP" type="text" id="montantCP" name="montantCP" min="0">\n' +
            '                                    <label for="montantCP" data-error="wrong" data-success="right">Montant Contre-partie</label>\n' +
            '                                </div>\n' +
            '                                <div class="input-field col s9">\n' +
            '                                    <input onkeypress="checkInputOnChange(event)" name="cp" type="text" id="cp" name="cp" min="0">\n' +
            '                                    <label for="cp" data-error="wrong" data-success="right">Contre-partie</label>\n' +
            '                                </div>\n' +
            '                                <a id="deleteCP" onclick="deleteCP(event)" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></a>\n' +
            '                                <br /><br /><p id="cpErrorMontant" class="red-text"></p> \n'+
            '                                <p id="cpError" class="red-text"></p> \n'+
            '                            </div>');
    });
});

function deleteCP(e){
    $(e.target).parent().parent().remove();
}

function checkInputOnChange(e){
    switch(e.target.name){
        case 'montantCP':
            if(e.target.value === ""){
                $(e.target).parent().parent().children("#cpErrorMontant").text("Veuillez remplir le champ du montant de la contre-partie");
            } else if(isNaN(parseFloat(e.target.value)) || parseFloat(e.target.value) < 0.0) {
                $(e.target).parent().parent().children("#cpErrorMontant").text("Le champ 'montant de la contre-partie' doit être positif")
            } else {
                $(e.target).parent().parent().children("#cpErrorMontant").text("");
            }
            break;
        case 'cp':
            if(e.target.value === ""){
                $(e.target).parent().parent().children("#cpError").text("Veuillez remplir le champ de la contre-partie");
            } else {
                $(e.target).parent().parent().children("#cpError").text("");
            }
            break;
    }
}