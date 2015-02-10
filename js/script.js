$(window).on('scroll', function() {
	var scrollTop = $(this).scrollTop();
	var social = $('#social');
	var title = $('#title');

	// Afficher/cacher titre
	if(scrollTop > 100) {
		if(social.css('visibility') == 'visible') {
			social.css('visibility', 'hidden');
		}
	}
	else {
		if(social.css('visibility') == 'hidden') {
			social.css('visibility', 'visible');
		}
	}

	// Afficher/cacher boutons de partage social
	if(scrollTop > $(this).height()) {
		if(title.css('visibility') == 'visible') {
			title.css('visibility', 'hidden');
		}
	}
	else {
		if(title.css('visibility') == 'hidden') {
			title.css('visibility', 'visible');
		}
	}
});