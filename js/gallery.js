$(document).ready(function() {
	
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
		const myWidget = cloudinary.galleryWidget({
			"container": "#c-main-gallery-content_images",
			"cloudName": "dehfxejtr",
			"mediaAssets": [{
				"tag": "interior",
				"mediaType": "image"
			}],
			"displayProps": {
				"mode": "expanded",
				"columns": 3,
				"spacing": 15
			},
			"aspectRatio": "8:5",
			"transformation": {
				"crop": "fill"
			},
			"bgColor": "transparent",
			"carouselLocation": "left",
			"carouselOffset": 10,
			"navigation": "always",
			"thumbnailProps": {
				"mediaSymbolSize": 42,
				"spacing": 20,
				"width": 90,
				"height": 90,
				"navigationFloat": true,
				"navigationShape": "square",
				"navigationSize": 40,
				"navigationColor": "#ffffff",
				"selectedStyle": "border",
				"selectedBorderPosition": "bottom",
				"selectedBorderWidth": 4
			},
			"navigationButtonProps": {
				"shape": "rectangle",
				"iconColor": "#ffffff",
				"color": "#000",
				"size": 52,
				"navigationPosition": "offset",
				"navigationOffset": 12
			},
			"themeProps": {
				"primary": "#000000",
				"active": "#777777"
			},
			"secureDistribution": "res-s.cloudinary.com",
			"secure": true,
			"zoomProps": {
				"type": "popup"
			},
			"loaderProps": {
				"color": "red",
				"style": "circle"
			}
		});
		myWidget.render();
	}

	const getAllExteriorPhotos = () => {
		const myWidget = cloudinary.galleryWidget({
			"container": "#c-main-gallery-content_images",
			"cloudName": "dehfxejtr",
			"mediaAssets": [{
				"tag": "exterior",
				"mediaType": "image"
			}],
			"displayProps": {
				"mode": "expanded",
				"columns": 3,
				"spacing": 15
			},
			"aspectRatio": "8:5",
			"transformation": {
				"crop": "fill"
			},
			"bgColor": "transparent",
			"carouselLocation": "left",
			"carouselOffset": 10,
			"navigation": "always",
			"thumbnailProps": {
				"mediaSymbolSize": 42,
				"spacing": 20,
				"width": 90,
				"height": 90,
				"navigationFloat": true,
				"navigationShape": "square",
				"navigationSize": 40,
				"navigationColor": "#ffffff",
				"selectedStyle": "border",
				"selectedBorderPosition": "bottom",
				"selectedBorderWidth": 4
			},
			"navigationButtonProps": {
				"shape": "rectangle",
				"iconColor": "#ffffff",
				"color": "#000",
				"size": 52,
				"navigationPosition": "offset",
				"navigationOffset": 12
			},
			"themeProps": {
				"primary": "#000000",
				"active": "#777777"
			},
			"secureDistribution": "res-s.cloudinary.com",
			"secure": true,
			"zoomProps": {
				"type": "popup"
			},
			"loaderProps": {
				"color": "red",
				"style": "circle"
			}
		});
		myWidget.render();
	}

	const getAllPhotos = () => {
		const myWidget = cloudinary.galleryWidget({
			"container": "#c-main-gallery-content_images",
			"cloudName": "dehfxejtr",
			"mediaAssets": [{
				"tag": "interior",
				"mediaType": "image"
			}, {
				"tag": "exterior",
				"mediaType": "image"
			}],
			"displayProps": {
				"mode": "expanded",
				"columns": 3,
				"spacing": 15
			},
			"aspectRatio": "8:5",
			"transformation": {
				"crop": "fill"
			},
			"bgColor": "transparent",
			"carouselLocation": "left",
			"carouselOffset": 10,
			"navigation": "always",
			"thumbnailProps": {
				"mediaSymbolSize": 42,
				"spacing": 20,
				"width": 90,
				"height": 90,
				"navigationFloat": true,
				"navigationShape": "square",
				"navigationSize": 40,
				"navigationColor": "#ffffff",
				"selectedStyle": "border",
				"selectedBorderPosition": "bottom",
				"selectedBorderWidth": 4
			},
			"navigationButtonProps": {
				"shape": "rectangle",
				"iconColor": "#ffffff",
				"color": "#000",
				"size": 52,
				"navigationPosition": "offset",
				"navigationOffset": 12
			},
			"themeProps": {
				"primary": "#000000",
				"active": "#777777"
			},
			"secureDistribution": "res-s.cloudinary.com",
			"secure": true,
			"zoomProps": {
				"type": "popup"
			},
			"loaderProps": {
				"color": "red",
				"style": "circle"
			}
		});
		myWidget.render();
		}

	// window.addEventListener('load', getAllPhotos())

	const handleGallerySelection = () => {
		const galleryOption = document.querySelectorAll('.c-gallery-option').forEach(item => {
			item.addEventListener('click', event => {
				let option = event.target.innerText;
				if(option === "Interior") {
					$("#c-main-gallery-content_images").empty();
					getAllInteriorPhotos();
				} else if(option === "Exterior") {
					$("#c-main-gallery-content_images").empty();
					getAllExteriorPhotos();
				} else {
					$("#c-main-gallery-content_images").empty();
					getAllPhotos();
				}
			})
		})
	}

	const myWidget = cloudinary.galleryWidget({
		"container": "#c-main-gallery-content_images",
		"cloudName": "dehfxejtr",
		"mediaAssets": [{
			"tag": "interior",
			"mediaType": "image"
		}, {
			"tag": "exterior",
			"mediaType": "image"
		}],
		"displayProps": {
			"mode": "expanded",
			"columns": 3,
			"spacing": 15
		},
		"aspectRatio": "8:5",
		"transformation": {
			"crop": "fill"
		},
		"bgColor": "transparent",
		"carouselLocation": "left",
		"carouselOffset": 10,
		"navigation": "always",
		"thumbnailProps": {
			"mediaSymbolSize": 42,
			"spacing": 20,
			"width": 90,
			"height": 90,
			"navigationFloat": true,
			"navigationShape": "square",
			"navigationSize": 40,
			"navigationColor": "#ffffff",
			"selectedStyle": "border",
			"selectedBorderPosition": "bottom",
			"selectedBorderWidth": 4
		},
		"navigationButtonProps": {
			"shape": "rectangle",
			"iconColor": "#ffffff",
			"color": "#000",
			"size": 52,
			"navigationPosition": "offset",
			"navigationOffset": 12
		},
		"themeProps": {
			"primary": "#000000",
			"active": "#777777"
		},
		"secureDistribution": "res-s.cloudinary.com",
		"secure": true,
		"zoomProps": {
			"type": "popup"
		},
		"loaderProps": {
			"color": "red",
			"style": "circle"
		}
	});
	myWidget.render();

	const galleryApp = () => {
		handleGalleryButtonSelection();
		handleGallerySelection();
	}

	galleryApp();
})