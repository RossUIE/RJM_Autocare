$(document).ready(function() {
$.ajax({
    url : "assets/gallery",
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".c-main-gallery-content_images").append( "<a href='"+ val + "'>" + "<img class='gallery-item' src='"+ val +"'></a>" );
            } 
        });
    }
});

	$('.c-main-gallery-content_images').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return '<small>RJM Autocare</small>';
			}
		}
	});
});