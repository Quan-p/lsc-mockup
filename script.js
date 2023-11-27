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

document.addEventListener('DOMContentLoaded', function () {
	const mobileMenuIcon = document.getElementById('mobile-menu-icon');
	const navLinksContainer = document.getElementById('nav-links-container');

	// Toggle the existing navigation links when the icon is clicked
	mobileMenuIcon.addEventListener('click', function () {
		if (window.innerWidth <= 768) {
			if (navLinksContainer.style.display === 'flex') {
				navLinksContainer.style.display = 'none';
			} else {
				navLinksContainer.style.display = 'flex';
			}
		}
	});

	// Close the navigation links if the window is resized to a larger size
	window.addEventListener('resize', function () {
		if (window.innerWidth > 768) {
			navLinksContainer.style.display = 'flex';
		}
	});
	// Close the navigation links initially if the window is resized to a smaller size
	window.addEventListener('resize', function () {
		if (window.innerWidth < 768) {
			navLinksContainer.style.display = 'none';
		}
	});
});
