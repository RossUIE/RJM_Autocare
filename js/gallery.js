$(document).ready(function() {
	
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
	const handleGalleryButtonSelection = () => {
		var btnContainer = document.getElementById("c-main-gallery-content_options");
		var btns = btnContainer.getElementsByClassName("c-gallery-option");
		
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", function(event) {
				var current = btnContainer.getElementsByClassName("active");
				current[0].className = current[0].className.replace(" active", "");
				this.className += " active";
			});
		}
	}

	const getAllInteriorPhotos = () => {
		$('.loader').show();
		return $.ajax({
			url : "assets/gallery/interior",
			success: function (data) {
				$(data).find("a").attr("href", function (i, val) {
					if( val.match(/\.(jpe?g|png|gif)$/) ) { 
						$(".c-main-gallery-content_images").append( "<a href='"+ val + "'>" + "<img class='gallery-item' src='"+ val +"'></a>" );
					} 
				})
			},
			complete: function() {
				$('.loader').hide();
			}
		})
	}

	const getAllExteriorPhotos = () => {
		$('.loader').show();
		return $.ajax({
			url : "assets/gallery/exterior",
			success: function (data) {
				$(data).find("a").attr("href", function (i, val) {
					if( val.match(/\.(jpe?g|png|gif)$/) ) { 
						$(".c-main-gallery-content_images").append( "<a href='"+ val + "'>" + "<img class='gallery-item' src='"+ val +"'></a>" );
					} 
				});
				
			},
			complete: function() {
				$('.loader').hide();
			}
		})
	}

	const getAllPhotos = () => {
		return $.when(getAllExteriorPhotos(), getAllInteriorPhotos()).done(function(){
			$('.loader').hide();
		});
	}

	window.addEventListener('load', getAllPhotos())

	const handleGallerySelection = () => {
		const galleryOption = document.querySelectorAll('.c-gallery-option').forEach(item => {
			item.addEventListener('click', event => {
				let option = event.target.innerText;
				if(option === "Interior") {
					$(".c-main-gallery-content_images").empty();
					getAllInteriorPhotos();
				} else if(option === "Exterior") {
					$(".c-main-gallery-content_images").empty();
					getAllExteriorPhotos();
				} else {
					$(".c-main-gallery-content_images").empty();
					getAllPhotos();
				}
			})
		})
	}

	const galleryApp = () => {
		handleGalleryButtonSelection();
		handleGallerySelection();
	}

	galleryApp();
});