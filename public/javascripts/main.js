$(document).ready(function(){
    $(".dropdown-button").dropdown({
        hover: true,
        belowOrigin: true
    });
    $(".button-collapse").sideNav();
    $(".purpleOnHover").hover(
        function () {
                $(this).children().css('color', "#673ab7");
        },
        function () {
            $(this).children().css("color", "#ffffff");
        }
    )
});