document.addEventListener('DOMContentLoaded', () => {

	const hamburger = document.querySelector('.header__hamburger');

	hamburger.addEventListener('click', (e) => {

		hamburger.classList.toggle('header__hamburger--active');

	})

})