<<<<<<< HEAD
$(document).ready(function(){
    //fill favorite state from the hidden field and construct the button
    var favStatus = $("#isFav").text();
    var favIcon = favStatus == "0" ? "star" : "star_border";
    var favText = favStatus == "0" ? "Ajouter en favoris" : "Retirer des favoris";

    $('.tooltipped').tooltip({delay: 50});
    $("#favicon").text(favIcon);
    $("#favbutton").attr("data-tooltip", favText);

    
    $("#description").html($.parseHTML($("#description").text()));
    $('ul.tabs').tabs();
    $('.modal').modal();
    $("#submitParticipation").addClass("disabled");
    //on check la contribution
    $("#montantJS").on("change", function(){
       var ether = $(this).val();
       ether = parseFloat(ether);
        if(isNaN(ether) || ether <= 0.0){
            $("#error").text("Veuillez saisir un montant supérieur à 0 ether");
            $("#submitParticipation").addClass("disabled");
        }else{
            $("#error").text("");
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
      $("#favbutton").attr("data-tooltip", favText);//attr change doesn't work
      $.ajax({
        url: '/gestfavorite',
        method: 'post',
        data: {isFav: favStatus, currentCamp: $("#currentCamp").text()} 
      });

      favStatus = favStatus == 0 ? 1 : 0;

      favIcon = favStatus == "0" ? "star" : "star_border";
      favText = favStatus == "0" ? "Ajouter en favoris" : "Retirer des favoris"; 
      console.log("ft : " + favText);
      $("#favicon").text(favIcon);
      console.log("afer");
    });
});
