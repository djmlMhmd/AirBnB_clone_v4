$(document).ready(() => {
	const amenities = {};
	const url = 'http://127.0.0.1:5001/api/v1/status/';
	$.get(url, function (data) {
		if (data.status === 'OK') {
			$('div#api_status').addClass('available');
		} else {
			$('div#api_status').removeClass('available');
		}
	});

	$('input[type="checkbox"]').change(() => {
		if ($(this).is(':checked')) {
			amenities[$(this).data('id')] = $(this).data('name');
		} else {
			delete amenities[$(this).data('id')];
		}
		let amenityNames = Object.values(amenities).join(', ');
		// small list of amenties check finish by ...
		if (amenityNames.length > 35) {
			amenityNames = amenityNames.substring(0, 35) + '...';
		}
		$('.amenities h4').text(amenityNames);
	});
});
