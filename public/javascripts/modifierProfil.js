$(document).ready(function () {

    $(".btnEditerProfil").click(function () {
        var toggled = $('.inputModifierProfil').attr('readonly');
        $('.btnModifierProfil').toggleClass("hide");
        $('.inputModifierProfil').attr('readonly', toggled ? false:true);
    });
});