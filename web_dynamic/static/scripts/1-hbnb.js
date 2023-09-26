document.addEventListener('DOMContentLoaded', () => {
	let displayObjects = {};
	let $h4 = $('div.amenities h4');

	$('input').each((idx, ele) => {
		let id = $(ele).attr('data-id');
		let name = $(ele).attr('data-name');
		// load dictionary
		displayObjects[id] = { name: name, checked: false };

		//change method on checkboxes
		$(ele).change(() => {
			let delimiter = '<span class="delim">, </span>';
			$('h4 span.delim').remove();

			if (ele.checked) {
				// Utilisez "ele.checked" pour vérifier l'état de la case à cocher
				console.log('checked');
				displayObjects[id]['checked'] = true;
				$h4.append('<span id=' + id + '>' + name + '</span>');
			} else {
				console.log('unchecked');
				displayObjects[id]['checked'] = false;
				$('span#' + id).remove();
			}

			let length = $('h4 > span').length;
			console.log($('h4 > span').length);
			$('div.amenities h4 span').each((idx, ele) => {
				if (idx < length - 1) {
					$(ele).append(delimiter);
				}
			});
		});
	});
});
