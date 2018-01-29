$(document).ready(function(){
    $("#description").html($.parseHTML($("#description").text()));
    $('ul.tabs').tabs();
    $('.modal').modal();
});