$(document).ready(function(){
    $("#description").html($.parseHTML($("#description").text()));
    $('ul.tabs').tabs();
    $('.modal').modal();
    $("#submitParticipation").parent().addClass("disabled");
    //on check la contribution
    $("#montantJS").on("change", function(){
       var ether = $(this).val();
       ether = parseFloat(ether);
        if(isNaN(ether) || ether <= 0.0){
            $("#error").text("Veuillez saisir un montant supérieur à 0 ether");
            $("#submitParticipation").parent().addClass("disabled");
        }else{
            $("#error").text("");
            $("#submitParticipation").parent().removeClass("disabled");
        }
    });
    $("#submitParticipation").on("click", function(){
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
           $("#montantActuel").text(ether);
           $("#perc").text("(soit "+newPerc+"% achevé)");
           newPerc = (newPerc>100)?100:newPerc;
           $("#barChargement").attr("style", "width:"+newPerc+"%");
           $('#contribuez').modal('close');
       });
    });
});