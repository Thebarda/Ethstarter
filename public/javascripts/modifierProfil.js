$(document).ready(function () {
    $(".modal").modal();
    $(".btnEditerProfil").click(function () {
        var toggled = $('.inputModifierProfil').attr('readonly');
        $('.btnModifierProfil').toggleClass("hide");
        $('.inputModifierProfil').attr('readonly', toggled ? false:true);
    });

    $("#supprimer").on('click', () => {
        $("#modalWaitDelete").modal('open');
        $.ajax({
            url: '/deleteUser',
            method: 'post',
        }).done((html) => {
            $("#modalWaitDelete").modal('open');
            location.href='/';
        });
    });
});