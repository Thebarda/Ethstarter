$(document).ready(function () {

    $(".btnEditerProfil").click(function () {
        var toggled = $('.inputModifierProfil').attr('readonly');
        $('.btnModifierProfil').toggleClass("hide");
        $('.inputModifierProfil').attr('readonly', toggled ? false:true);
    });

    $('[name="oldPassword"]').keypress(function () {
        if ($(this).val() == "") {
            $('.inputModifierProfilMDP').attr('readonly', true);
            $('.inputModifierProfilMDP').val("");
        } else {
            $('.inputModifierProfilMDP').attr('readonly', false);
        }
    });

});