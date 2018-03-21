let idUserToDrop = null;
function preDeleteUser(e){
    idUserToDrop = e.target.dataset.id;
}

function deleteUser(){
    $("#modalWaitDelete").modal('open');
    $(document).ready(() => {
       $.ajax({
           url: '/deleteUseModerator',
           method: 'post',
           data: {idUser: idUserToDrop}
       }).done((html) => {
           $("#modalWaitDelete").modal('close');
           location.reload();
       });
    });
}