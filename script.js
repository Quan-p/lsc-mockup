document.addEventListener('DOMContentLoaded', function () {
	const learnBtn = document.getElementById('learn-button');
	const modal = document.getElementById('request-more-modal');
	const closePopupBtn = document.getElementById('close-popup');

	if (learnBtn && modal && closePopupBtn) {
		learnBtn.addEventListener('click', function () {
			modal.style.display = 'block';
		});

		closePopupBtn.addEventListener('click', function () {
			modal.style.display = 'none';
		});

		// Close the modal if the user clicks outside the form
		window.addEventListener('click', function (event) {
			if (event.target === modal) {
				modal.style.display = 'none';
			}
		});
	} else {
		console.error('Element missing.');
	}
});
