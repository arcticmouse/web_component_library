$(document).ready(function(){
    $(document).on('click', 'button.photo-grid-details-close', function(e){
        e.stopPropagation();
        $('.photo-grid-details').slideToggle('slow', function(){ 
            $(this).parent().removeClass('clicked');
            $(this).remove(); 
        });
    });

    $('component.photo_grid > .grid-img').on('click', function(e){
        if(!$(this).hasClass('clicked')){
            $(this).addClass('clicked');
            $(this).siblings().removeClass('clicked');
            $('.photo-grid-details').remove();

            var title = $(this).data('title');
            var caption = $(this).data('caption');
            var link = $(this).data('link');
            var imgsrc = $(this).children('img').attr('src');
            var credit = $(this).data('credit');

            var detParent = $('<div></div>')
                .addClass('photo-grid-details')
                .css({'width': $(this).parent().width(), 'left': $('.grid-img:first-of-type').position().left})
                .appendTo($(this))
                .hide()
                .slideToggle("slow");

            var detClose = $('<button></button>')
                .addClass('photo-grid-details-close')
                .attr('aria-label', 'close')
                .attr('tab-index', '0')
                .text('X')
                .appendTo(detParent);

            var detChild = $('<div></div>')
                .addClass('photo-grid-inner-details')
                .appendTo(detParent);

            var detLeftCol = $('<div></div>')
                .addClass('photo-grid-inner-details-left')
                .appendTo(detChild);
            
            var detImage = $('<img />')
                .attr('src', imgsrc)
                .appendTo(detLeftCol);

            if(credit.length > 3) {
                var detCredit = $('<p></p>')
                    .text('Photo by ' + credit)
                    .appendTo(detLeftCol);
            }                 

            var detRightCol = $('<div></div>')
                .addClass('photo-grid-inner-details-right')
                .appendTo(detChild);

            if(link.length > 10) {
                var detLink = $('<a></a>')
                    .attr('href', link)
                    .appendTo(detRightCol);

                var detTitle = $('<h3></h3>')
                    .text(title)
                    .appendTo(detLink);
        
                var detCaption = $('<p></p>')
                    .text(caption)
                    .appendTo(detLink);               
            } else {
                var detTitle = $('<h3></h3>')
                    .text(title)
                    .appendTo(detRightCol);

                var detCaption = $('<p></p>')
                    .text(caption)
                    .addClass('captionnolink')
                    .appendTo(detRightCol);                  
            }
        } else {
            $('.photo-grid-details').slideToggle('slow', function(){ 
                console.log('three')
                $(this).parent().removeClass('clicked');
                $(this).remove(); 
            });
        }
    })

    $('.grid-img').keypress(function(e){
        if(e.which == 13){
            $('.grid-img').click();
        }
    });

    $('button.photo-grid-details-close').keypress(function(e){
        if(e.which == 13){
            $('button.photo-grid-details-close').click();
        }
    });

    $(document).keydown(function(e){
        var key = e.keyCode || e.which
          if(key == 27) { //esc
            $('button.photo-grid-details-close').click();
          } 
    })

    $(window).resize(function(){
        var width = $('.photo-grid-details').parent().parent().width();
        var left = $('.photo_grid').css('marginLeft');
        $('.photo-grid-details').css({'width': width, 'left': left});
    })
});