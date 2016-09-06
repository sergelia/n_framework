$(document).ready(function() {

	$(".js-tabs a").click(function(e) {
		e.preventDefault();
		var target = $(this).data('target');
		$(".js-tabs a").removeClass('active');
		$(this).addClass('active');
		if (typeof target !== "undefined") {
			$('.tab-content').removeClass('active').addClass('hidden');
			var target_element = $('.tabcontent').find(target);
			$(target_element).removeClass('hidden').addClass('active');

		}
	});
});
