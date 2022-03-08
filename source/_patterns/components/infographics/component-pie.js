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