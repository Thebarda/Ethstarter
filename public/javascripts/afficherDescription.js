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
});