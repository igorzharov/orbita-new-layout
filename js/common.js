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

		if (!event.target.closest('.catalog-parent-categories__item')) return;

		const catalogCategories = document.querySelectorAll('.catalog-category__content');

		catalogCategories.forEach((item) => {
			item.classList.remove('catalog-category__content--active');
		})

		event.target.classList.toggle('123');

		const id = event.target.getAttribute('catalog-id');

		console.log(event.target.getAttribute('catalog-id'));
		
		const catalogCategory = document.querySelector(`[catalog-category="${id}"]`)

		catalogCategory.classList.add('catalog-category__content--active');
	
	});

})