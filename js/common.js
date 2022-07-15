document.addEventListener('DOMContentLoaded', () => {

	const hamburger = document.querySelector('.header__hamburger');

	const catalog = document.querySelector('.catalog');

	hamburger.addEventListener('click', () => {

		hamburger.classList.toggle('header__hamburger--active');
		catalog.classList.toggle('catalog--active');

	})

	const headerCatalogButton = document.querySelector('.header__catalog-button');

	headerCatalogButton.addEventListener('click', () => {

		headerCatalogButton.classList.toggle('header__catalog-button--active');
		catalog.classList.toggle('catalog--active');

		if (window.matchMedia("(min-width: 860px)").matches) {

			const categories = document.querySelectorAll('.catalog__item');

			categories[0].classList.add('catalog__item--active');

			const childCategories = document.querySelectorAll('.catalog-category');

			childCategories[0].classList.add('catalog-category--active');

		}

	})

	document.addEventListener('click', function (event) {

		if (!event.target.closest('.catalog__item')) return;

		const categories = document.querySelectorAll('.catalog__item');

		if (window.matchMedia("(min-width: 860px)").matches) {

			categories.forEach((item) => {
				item.classList.remove('catalog__item--active');
			});

		}

		const category = event.target.closest('.catalog__item');

		const id = category.getAttribute('category-id');

		category.classList.toggle('catalog__item--active');

		const childCategories = document.querySelectorAll('.catalog-category');

		if (window.matchMedia("(min-width: 860px)").matches) {

			childCategories.forEach((item) => {
				item.classList.remove('catalog-category--active');
			});

		}

		const catalogCategory = document.querySelector(`[parent-category-id="${id}"]`);

		catalogCategory.classList.toggle('catalog-category--active');

	});

})