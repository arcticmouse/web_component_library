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