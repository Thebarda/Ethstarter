$(document).ready(function () {
    //Sidenav always open
    $(".button-collapse").sideNav({ menuWidth: 250 });
    $(".modal").modal();
    $(".btnActive").on("click", function () {
        $(".btnActive").each(function () {
            $(this).parent().removeClass("active");
        });
        $(this).parent().addClass("active");
    });
});