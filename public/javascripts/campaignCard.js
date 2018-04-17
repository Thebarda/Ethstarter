$(document).ready(function(){
//    $(".card").mouseenter(function(e){
        if ($(this).find('> .card-reveal').length) {
            if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i')) ) {
                // Make Reveal animate up
                $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity(
                    {translateY: '-100%'}, 
                    {
                        duration: 300, 
                        queue: false, 
                        easing: 'easeInOutQuad'
                    });
                }
            }
            
            $('.card-reveal').closest('.card').css('overflow', 'hidden');
            
//        });
        
/* 
    $(".card").mouseleave(function(){
        $(this).find('.card-reveal').velocity(
            {translateY: 0}, 
            {
                duration: 225,
                queue: false,
                easing: 'easeInOutQuad',
                complete: function() {
                    $(this).css({ display: 'none'});
                }
            });
    }); */

    $(".card").click(function(){
        var link = $('#link').attr('href');
        window.location.href = link;
    });
});
