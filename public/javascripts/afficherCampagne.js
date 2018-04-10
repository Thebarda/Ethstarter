$(document).ready(function(){
    //fill favorite state from the hidden field and construct the button
    var favStatus = $("#isFav").text();
    var favIcon = favStatus == "0" ? "favorite_border" : "favorite";
    var favText = favStatus == "0" ? "Ajouter en favoris" : "Retirer des favoris";

    $('.tooltipped').tooltip({delay: 50});
    $("#favicon").text(favIcon);
    $("#favbutton").attr("data-tooltip", favText);

    
    $("#description").html($.parseHTML($("#description").text()));
    $('ul.tabs').tabs();
    $('.modal').modal();
    $(".commForm").hide();
    $("#submitParticipation").addClass("disabled");
    //on check la contribution
    $("#montantJS").on("change", function(){
       var ether = $(this).val();
       ether = parseFloat(ether);
        if(isNaN(ether) || ether <= 0.0){
            $("#errorContrib").text("Veuillez saisir un montant supérieur à 0 ether");
            $("#submitParticipation").addClass("disabled");
        }else{
            $("#errorContrib").text("");
            $("#submitParticipation").removeClass("disabled");
        }
    });
    $("#submitParticipation").on("click", function(){
      $("#submitParticipation").addClass("disabled");
       $.ajax({
           url:"/participation",
           method:"post",
           data:{montant:$("#montantJS").val()}
       }).done(function(html){
           Materialize.toast("Merci d'avoir contribué à la campagne'"+$("#titre").text()+"'" , 4000);
           var ether = $("#montantJS").val();
           ether = parseFloat(ether);
           ether = ether + parseFloat($("#montantActuel").text());
           var but = parseFloat($("#but").text());
           var newPerc = (ether/but)*100;
           $("#montantActuel").text(ether.toFixed(2));
           $("#perc").text("(soit "+newPerc+"% achevé)");
           newPerc = (newPerc>100)?100:newPerc;
           $("#barChargement").attr("style", "width:"+newPerc+"%");
           $('#contribuez').modal('close');
           $("#nbContributeurs").text(parseInt($("#nbContributeurs").text())+1);
           $("#nbContribsss").text(parseInt($("#nbContribsss").text())+1);
       });
    });
    $("#approve").on('click', () => {
      $.ajax({
        url: '/updateValidationCampaign',
        method: 'post',
        data: {validationNumber: 1, descriptionValidation: $("#descriptionValidation").val()}
      }).done((data) => {
        location.href="/campaingsWaiting"
      })
    });
    $("#unapprove").on('click', () => {
      $.ajax({
        url: '/updateValidationCampaign',
        method: 'post',
        data: {validationNumber: 2, descriptionValidation: $("#descriptionValidation").val()}
      }).done((data) => {
        location.href="/campaingsWaiting"
      })
    });

    $("#favbutton").on('click', () => {
      $.ajax({
        url: '/gestfavorite',
        method: 'post',
        data: {isFav: favStatus, currentCamp: $("#currentCamp").text()} 
      });

      favStatus = favStatus == 0 ? 1 : 0;

      favIcon = favStatus == "0" ? "favorite_border" : "favorite";
      favText = favStatus == "0" ? "Ajouter en favoris" : "Retirer des favoris"; 
      $("#favicon").text(favIcon);
      $("#favbutton").tooltip('hide').attr("data-tooltip", favText).tooltip('show');
    });

    $("#btnComm").on('click', () => {
      $("#btnComm").hide();
      $(".commForm").show();
    });
 
    $("#btnPost").on('click', () => {
      var comm = document.getElementById("areaComm").value;
      if(comm.trim()!==""){
        $("#btnComm").show();
        $(".commForm").hide();
        $.ajax({
          url: '/postcomm',
          method: 'post',
          data: {comm: comm, currentCamp: $("#currentCamp").text()}
        }).done(function(html){
          Materialize.toast("Votre commentaire a été posté'");
          setTimeout(function () {
            location.href = "/campaign/"+$("#currentCamp").text();
        }, 2000);
        });
      }else{
        $("#error").text("Le champ commentaire doit être rempli!");
      }
    });
    $('.rrssb-buttons').rrssb({
      // required:
      title: 'Projet Ethstarter',
      url: 'http://vps409515.ovh.net:1047/campaign/'+ $("#currentCamp").text(),
  
      // optional:
      description: 'A découvrir sur Ethstarter: ',
      emailBody: 'A découvrir sur Ethstarter: http://vps409515.ovh.net:1047/campaign/'+ $("#currentCamp").text()
    });
    
    $("#sendMail").on("click", () => {
       let subject = $("#subjectEmail").val();
       let emailBody = $("#textEmail").val();
       let error = "";
       if(subject.length <= 0) {
           error += "Veuillez spécifier un sujet";
       }
       if(emailBody.length <= 0) {
           if(error !== "") {
               error += " ainsi qu'un corps de mail";
           } else {
               error += "Veuillez spécifier un corps de mail";
           }
       }
       if(error !== "") {
           $("#errorMail").text(error);
       } else {
           Materialize.toast('E-Mail en cours d\'envoi', 1500, 'rounded');
           $("#errorMail").text("");
           $.ajax({
              method: 'get',
              url: '/sendMail',
              data: {subject: subject, bodyMail: emailBody}
           }).done((response) => {
                if(response) {
                    Materialize.toast('E-mail non envoyé. Vérifiez votre adresse mail', 1500, 'rounded');
                } else {
                    Materialize.toast('E-mail envoyé', 1500, 'rounded');
                    $("#modalMail").modal('close');
                }
           });
       }
    });
});

$('.contrepartie').click(function(){
  var testConnect = $("#testConnect").text();
  if(testConnect=="1" || testConnect=="2" ){
    var montant = $(this).attr('id');
    $("#contribuez").modal('open');
    $("#montantJS").val(montant);
}
 
});
