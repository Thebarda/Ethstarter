$(document).ready(() => {
    fetchAdminTab('contributeurs');
    $("#contributeursTab").on('click', () => {
        fetchAdminTab('contributeurs');
    });
    $("#entrepreneursTab").on('click', () => {
        console.log("coucou");
        fetchAdminTab('entrepreneurs');
    });
    $("#campagnesTab").on('click', () => {
        fetchAdminTab('campagnes');
    });
});

function fetchAdminTab(tab) {
    $.ajax({
        url: '/fetchAdmin/'+tab,
        method: 'get'
    }).done((data) => {
        $("#"+tab).html($(data).filter("#adminTab").html());
    });
}