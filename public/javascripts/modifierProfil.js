$(document).ready(function () {
    $(".btnEditerProfil").click(function () {
        var toggled = $('.inputModifierProfil').attr('disabled');
        $('.btnModifierProfil').toggleClass("hide");
        $('.inputModifierProfil').attr('disabled', toggled ? false:true);
    });
});