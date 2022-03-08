var player;

window.onYouTubeIframeAPIReady = function(){
  player = new YT.Player('video-iframe');

  player.addEventListener('onReady', function(e){
    choosen = $('component.video-playlist > .playlist > .video.active');
  });

  player.addEventListener('onStateChange', function(e) {
    if(e.data == 0) {
      $(choosen).removeClass('active');
      choosen = $(choosen).next().addClass('active');
      let id = choosen.data('url').slice(choosen.data('url').lastIndexOf('/') + 1)
      player.loadVideoById({
        'videoId': id
      });
    }
  });

  $('component.video-playlist .playlist .video').click(function(){  
    console.log('hello')
    choosen = $(this).addClass('active');
    $(this).siblings().removeClass('active');
    let id = choosen.data('url').slice(choosen.data('url').lastIndexOf('/') + 1)
    player.loadVideoById({
      'videoId': id
    });
  });

  $(window).scroll(function(){
    var e_top = $('component.video-playlist').offset().top;
    var e_bot = $('component.video-playlist').outerHeight() + e_top;
    var view_top = $(window).scrollTop();
    var view_bot = $(window).height() + view_top;

    if((e_top < view_top) || (e_bot > view_bot)){
      player.pauseVideo();
    } 
  });
}'active');
    $('#'+id+'.slideshow .controls .dots span.'+curr_num).removeClass('active');    
    })

    $('component.slideshow .controls .dots span').click(function(){
    var id = $(this).closest('component.slideshow').attr('id');
    var choosen_num = $(this).attr('class').split(' ')[0];
    var curr_num = $(this).siblings('.active').attr('class').split(' ')[0];
    var curr_slide = $('#'+id+' .slide.active');

    $(this).addClass('active');
    $('#'+id+'.slideshow .controls .dots .'+curr_num).removeClass('active');   

    $('#'+id+'.slideshow .slide.'+choosen_num).addClass('active');
    curr_slide.removeClass('active');    
})       .text('Photo by ' + credit)
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