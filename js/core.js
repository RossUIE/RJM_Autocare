$(document).ready(function(){
	const navSlide = () => {
		const burger = document.querySelector('.burger');
		const nav = document.querySelector('.c-header_links');
		const navLinks = document.querySelectorAll('.c-header li');
		const backdrop = document.querySelector('.c-backdrop');

		burger.addEventListener('click', ()=> {
			nav.classList.toggle('nav-active');
			backdrop.classList.toggle('backdrop-active')
			navLinks.forEach((link, index)=> {
				if(link.style.animation) {
					link.style.animation = ''
				} else {
					link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`
				}   
			})

			burger.classList.toggle('toggle')
		});

		backdrop.addEventListener('click', ()=> {
			backdrop.classList.remove('backdrop-active');
			nav.classList.remove('nav-active');
			burger.classList.remove('toggle');
			navLinks.forEach((link, index)=> {
				if(link.style.animation) {
					link.style.animation = ''
				} else {
					link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`
				}   
			})
		})
		for (const link of navLinks) {
			link.addEventListener('click', function(event) {
				nav.classList.remove('nav-active')
				backdrop.classList.remove('backdrop-active');
				navLinks.forEach((link, index)=> {
					if (screen.width <= 659) {
						if(link.style.animation) {
							link.style.animation = ''
						} else {
							link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`
						}  
					}
					
				})
				burger.classList.toggle('toggle')
			})
		}
	};

	const renderServiceContent = () => {
		const services = document.querySelectorAll('.service-item').forEach(item => {
			item.addEventListener('click', event => {
				const service = event.target.innerText;
				if(service === "Maintenance Wash") {
					$(".c-services-content_info").load('../resources/ServicesContent/maintenance.html');
				} else if(service === "Exterior Valet") {
					$(".c-services-content_info").load('../resources/ServicesContent/exterior-valeting.html');
				} else if(service === "Interior Valet") {
					$(".c-services-content_info").load('../resources/ServicesContent/interior-valeting.html');
				} else if(service === "One Stage Enhancement") {
					$(".c-services-content_info").load('../resources/ServicesContent/one-stage.html');
				} else {
					$(".c-services-content_info").load('../resources/ServicesContent/full-correction.html');
				}
			});
		})
	}

	const app = () => {
		navSlide();
		renderServiceContent();
	}

	app();

})