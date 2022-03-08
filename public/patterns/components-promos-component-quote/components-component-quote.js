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