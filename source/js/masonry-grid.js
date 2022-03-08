var $ = jQuery;

$(document).ready(function(){
    var macyInstance = Macy({
        container: '#masonry-grid',
        columns: 4,
        margin: 10,
        breakAt: {
            992: 3,
            768: 2,
            520: 1
        }
      });
});