

document.addEventListener('click', function (event) {

	if (event.target.closest('.card-product__button')) {

		const alert = document.querySelector('.c-alert');

		const toast = Toastify({
			node: alert.cloneNode(true),
			duration: 2500,
			close: false,
			escapeMarkup: false,
			gravity: "top", // `top` or `bottom`
			position: "center", // `left`, `center` or `right`
			offset: {
				x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
				y: -15 // vertical axis - can be a number or a string indicating unity. eg: '2em'
			},
			stopOnFocus: true, // Prevents dismissing of toast on hover
		}).showToast();

		const closeToast = document.querySelector('.c-alert__close');

		closeToast.addEventListener('click', () => {
			toast.hideToast();
		})

	}



});



