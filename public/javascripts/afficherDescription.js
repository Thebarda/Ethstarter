$(document).ready(function(){
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
        data: {validationNumber: 1, descriptionValidation: $("#descriptionValidation").val(), titre:$("#titre").text()}
      }).done((data) => {
        location.href="/campaingsWaiting"
      })
    });

    $("#unapprove").on('click', () => {
      $.ajax({
        url: '/updateValidationCampaign',
        method: 'post',
        data: {validationNumber: 2, descriptionValidation: $("#descriptionValidation").val(), titre:$("#titre").text()}
      }).done((data) => {
        location.href="/campaingsWaiting"
      })
    });

    $("#favYes").on('click', () => {
      $.ajax({
        url: '/gestfavorite',
        method: 'post',
        data: {isFav: 1, currentCamp: $("#currentCamp").text()} 
      });
      $("#favYes").find("i").text('star_border');
      this.id = 'favNo'; 
    });

    $("#favNo").on('click', () => {
      $.ajax({
        url: '/gestfavorite',
        method: 'post',
        data: {isFav: 0, currentCamp: $("#currentCamp").text()} 
      });
      $("#favNo").find("i").text('star'); 
      this.id = 'favYes'; 
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
        });
      }else{
        $("#error").text("Le champ commentaire doit être rempli!");
      }
     
    });
});
