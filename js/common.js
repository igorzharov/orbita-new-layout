document.addEventListener('DOMContentLoaded', () => {

	const hamburger = document.querySelector('.header__hamburger');

	hamburger.addEventListener('click', () => {

		hamburger.classList.toggle('header__hamburger--active');

	})

	const header__catalog__button = document.querySelector('.header__catalog-button');

	const catalog = document.querySelector('.catalog');

	header__catalog__button.addEventListener('click', () => {

		header__catalog__button.classList.toggle('header__catalog-button--active');
		catalog.classList.toggle('catalog--active');

	})

})