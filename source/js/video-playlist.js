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
}