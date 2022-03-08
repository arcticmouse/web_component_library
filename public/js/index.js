$(document).ready(function(){
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //********************//
  /*
  /* mobile nav bar animation
  /*
  //********************/
  $('button.menu.navbar-toggle').click(function(){
    $('header').toggleClass('on')

    if($('.navigation').attr('aria-expanded') == 'true'){
      $('.navigation').attr('aria-expanded', false).slideUp(100).hide()
    } else {
      $('.navigation').hide().slideDown(100).attr('aria-expanded', true)
    }
  })

  //********************//
  /*
  //modals
  /*
  //********************/
  var lastFocus
  var video_iframe_id
  var video_iframe

  function close_modal(ele){
    var y = ele.attr('class').split(' ')[0]
    $('#' + y).toggleClass('hidden show')
    lastFocus.focus()
    lastFocus.removeAttr('tabindex')
      video_iframe.contentWindow.postMessage(JSON.stringify({
        "event": "command",
        "func": 'stopVideo',
        "args": [],
        "id": video_iframe_id
    }), "*")
  }

  $('a.modal').click(function(){
    lastFocus = $(this)
    let k = $(this).attr('class').split(' ')[1]
    video_iframe_id = $('#'+k+' .modal-content .modal-body > iframe').attr('id')
    video_iframe = document.getElementById(video_iframe_id)
    $(this).attr('tabindex', '0')
    event.stopPropagation()
    var x = $(this).attr('class').split(' ')[1]
    $('#' + x).toggleClass('hidden show')
    $('#' + x).focus()
    $(document).keydown(function(e){
      var key = e.keyCode || e.which
        if(key == 9) { //tab
          if(document.activeElement.classList.contains('modal-footer')) $('#' + x + ' .modal-head h4').focus()
        }
        if(key == 27) { //esc
          close_modal($('.modal-window button.close'))
        } 
    })
  })

  $('.modal-window button.close').click(function(){
    close_modal($(this))
  })


  //********************//
  /*
  //social sharing in video modal footer
  /*
  //********************/
  $('.sharetwitter').click(function(){
		var tweetURL = $(this).parent().attr('name')
    var tweetText = $(this).closest('.modal-content').find('h4').text()
    var tweet = 'https://twitter.com/intent/tweet?text='+tweetText+"&url="+tweetURL
    var twWindowFeatures = 'width=600, height=400, scrollbars=no'
		window.open(tweet, 'TwitterShareVideo', twWindowFeatures)
  })
    
  $('.sharefacebook').click(function(){
    var fbURL = "https://www.facebook.com/sharer/sharer.php?u=" + $(this).parent().data("url")
    var fbWindowFeatures = 'width=600, height=400, scrollbars=no'
    window.open(fbURL, 'FacebookShareVideo', fbWindowFeatures)
  })

  $('.shareemail').click(function(){
    $(this).parent().siblings('.modal-body').children('iframe').css('display', 'none')
    $(this).parent().css('display', 'none')
    $(this).parent().siblings('.modal-body').children('div.email').css('display', 'block').attr('aria-hidden', 'false')
  })  



  //********************//
  /*
  //add external link span to links in content & mega menu dropdowns
  //&#8239;<span class="external-url fonta fa-external-link"><span class="invisible">(external link)</span></span>
  /*
  //********************//
  $('#mega-menu-wrap-main #mega-menu-main li.mega-menu-item .widget_nav_menu .menu .menu-item a').each(function(){
    if( ($(this).attr('href').indexOf('www.berkeley') == -1)
      && ($(this).attr('href').indexOf('://berkeley') == -1) 
      && ($(this).attr('href').charAt(0) !== '/') ) {
      $(this).append('&nbsp;');
      $(this).append(
        $('<span/>', {'class': 'external-url fonta fa-external-link'}).append(
            $('<span/>', {'class': 'invisible', 'text': '(external link)'})
        )
      );
    }
  })



  //********************//
  /*
  /* close alert bar
  /*
  //********************/
  $('.alert-bar button#alert-bar-close').click(function(){
    $('.alert-bar').slideUp(500);
  });



  //********************//
  /*
  /* slideshow
  /*
  //********************/  
  //dots
  //arrow
  $('component.slideshow .controls .arrow.left, component.slideshow .controls .arrow').click(function(){
    var id = $(this).closest('component.slideshow').attr('id');
    var curr_slide = $(this).parent().siblings('.active');
    var curr_num = curr_slide.attr('class').split(' ')[1];

    if($(this).hasClass('arrow left')) {
      if(curr_slide.prev('.slide').length <= 0) {
        curr_slide.siblings('.slide:last').addClass('active');
        $('#'+id+'.slideshow .controls .dots span:last').addClass('active');
      } else {
        curr_slide.prev('.slide').addClass('active');
        //$('#'+id+'.slideshow .controls .dots span.'+curr_num).prev().addClass('active');
        $('#'+id+'.slideshow .controls .dots span.'+curr_num-1).prev().addClass('active');
      }
    }

    if($(this).hasClass('arrow right')) {
      if(curr_slide.next('.slide').length <= 0) {
        curr_slide.siblings('.slide:first').addClass('active');
        $('#'+id+'.slideshow .controls .dots span:first').addClass('active');
      } else {
        curr_slide.next('.slide').addClass('active');
        $('#'+id+'.slideshow .controls .dots span.'+curr_num).next().addClass('active');
      }
    } 

    curr_slide.removeClass('active');
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
  })



  //********************//
  /*
  /* pie chart hover tooltip
  /* element is added to body and styling is in site.scss
  /*
  //********************/
  $(function() {
    $('component.Pie .pie-chart circle.circle').tooltip({
      track: true,
      show: 'slideDown',
      close: 'slideUp',
      tooltipClass: 'pie-tooltip',
      content: function(){
        return numberWithCommas($(this).attr('title'));
      },
    });
  });
});