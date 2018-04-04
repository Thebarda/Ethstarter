function searchFunc(e){
    $(document).ready(() => {
        console.log('salut');
        var search = e.target.value;
        $(".textNotifs").each(function(){
           if($(this).children().text().includes(search)) {
               $(this).show(200);
           } else {
               $(this).hide(200);
           }
        });
    });
}