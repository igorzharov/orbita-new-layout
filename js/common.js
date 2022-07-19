document.addEventListener('DOMContentLoaded', () => {

	const hamburger = document.querySelector('.c-header__hamburger');

	const catalog = document.querySelector('.catalog');

	hamburger.addEventListener('click', () => {

		hamburger.classList.toggle('c-header__hamburger--active');

		catalog.classList.toggle('catalog--active');

		document.body.style.overflowY = 'scroll'

		if (catalog.classList.contains('catalog--active')) {

			document.body.style.overflowY = 'hidden'

		}

	})

	const headerCatalogButton = document.querySelector('.c-header__catalog-button');

	headerCatalogButton.addEventListener('click', () => {

		headerCatalogButton.classList.toggle('c-header__catalog-button--active');
		catalog.classList.toggle('catalog--active');

		if (window.matchMedia("(min-width: 860px)").matches) {

			const categories = document.querySelectorAll('.catalog__item');

			categories[1].classList.toggle('catalog__item--active');

			const childCategories = document.querySelectorAll('.catalog-category');

			childCategories[0].classList.toggle('catalog-category--active');

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

	const catalogButton = document.querySelector('.catalog__button');

	const catalogCategories = document.querySelector('.catalog__categories');

	catalogButton.addEventListener('click', () => {

		catalogButton.classList.toggle('catalog__button--active');

		catalogCategories.classList.toggle('catalog__categories--active')

	})

})