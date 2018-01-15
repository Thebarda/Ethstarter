$(document).ready(function () {
    //Sidenav always open
    $(".button-collapse").sideNav();

    $(".btnActive").on("click", function(){
        $(".btnActive").each(function(){
           $(this).parent().removeClass("active");
        });
        $(this).parent().addClass("active");
    });
});