const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"altInfo":"Banner Print-it"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"altInfo":"Equipe de travail"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"altInfo":"Nos palette de couleurs"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"altInfo":"Nos autocollant découpe laser"
	}
]
		let currentImageIndex = 0;
        const bannerImg = document.querySelector('.banner-img');
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');
		const dotsContainer = document.querySelector('.dots')

        function changeImage(index) {
            bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
			// bannerImg.setAttribute(`./assets/images/slideshow/${slides[index].image}`)
        }
		function changeAlt(index) {
			// bannerImg.setAttribute("alt", `${slides[index].altInfo}`)
			bannerImg.alt = `${slides[index].altInfo}`
		}
		function changeText(index){
			textImg.innerHTML = slides[index].tagLine;
		}

		function createDot(index) {
			const dot = document.createElement('span');
			dot.classList.add('dot');
			dot.addEventListener('click', () => {
				currentImageIndex = index;
				slider()
			})
			dotsContainer.appendChild(dot);
		}

		function slider() {
			changeImage(currentImageIndex);
			changeText(currentImageIndex);
			updateDots(currentImageIndex);
			changeAlt(currentImageIndex);
		}

		slides.forEach((slide, index) => {
			createDot(index);
		})

		
		function updateDots(index) {
			const dots = document.querySelectorAll('.dot');
			slides.forEach((_,i) => {
				if (i === index) {
					dots[i].classList.add('dot_selected');
					
				} else {
					dots[i].classList.remove('dot_selected');

				}
			})
}

		let textImg = document.querySelector('#banner p');

        arrowLeft.addEventListener('click', () => {
			console.log("la flèche de gauche fonctionne");
            currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
            slider()
        });

        arrowRight.addEventListener('click', () => {
			console.log("la flèche de droite fonctionne");
            currentImageIndex = (currentImageIndex + 1) % slides.length;
			slider()
        });

	
		slider();
