
$(document).ready(function () {
    //Sidenav always open
    $(".button-collapse").sideNav({menuWidth: 320});
    $(".modal").modal();
    $(".btnActive").on("click", function(){
        $(".btnActive").each(function(){
           $(this).parent().removeClass("active");
        });
        $(this).parent().addClass("active");
    });

});
