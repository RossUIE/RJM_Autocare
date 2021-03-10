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

	const app = () => {
		navSlide();
	}

	app();