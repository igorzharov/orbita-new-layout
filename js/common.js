document.addEventListener('DOMContentLoaded', () => {

	const hamburger = document.querySelector('.header__hamburger');

	hamburger.addEventListener('click', () => {

		hamburger.classList.toggle('header__hamburger--active');

	})

	const headerCatalogButton = document.querySelector('.header__catalog-button');

	const catalog = document.querySelector('.catalog');

	headerCatalogButton.addEventListener('click', () => {

		headerCatalogButton.classList.toggle('header__catalog-button--active');
		catalog.classList.toggle('catalog--active');

	})

	document.addEventListener('click', function (event) {

		const categories = document.querySelectorAll('.catalog__item');

		// categories.forEach((item) => {
		// 	item.classList.remove('catalog__item--active');
		// })

		const category = event.target.closest('.catalog__item');

		const id = category.getAttribute('category-id');

		category.classList.toggle('catalog__item--active');

		const childCategories = document.querySelectorAll('.catalog-category');

		// childCategories.forEach((item) => {
		// 	item.classList.remove('catalog-category--active');
		// })
		
		const catalogCategory = document.querySelector(`[parent-category-id="${id}"]`)

		catalogCategory.classList.toggle('catalog-category--active');
	
	});

})