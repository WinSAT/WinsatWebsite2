/*===== NAVBAR TRANSPARENT TO SOLID =====*/
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('.navbar').addClass('solid');
		} else {
			$('.navbar').removeClass('solid');
		}
	});
});

/*===== CLOSE MOBILE NAV ON CLICK =====*/
$(document).ready(function() {
	$(document).click(function(event) {
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("show");
		if (_opened === true && !clickover.hasClass("navbar-toggler")) {
			$(".navbar-toggler").click();
		}
	});
});

/*===== SMOOTH SCROLLING TO LINKS =====*/
$(document).ready(function() {
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate( {
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			})
		} // End of the if statement.
	})
})

/*===== BOUNCING DOWN ARROW =====*/
$(document).ready(function() {
	$(window).scroll(function() {
		// Target class that wraps the arrow icon
		// For any element with an arrow class in it, change the css opacity
		// Start at 1 or 100% opacity, as you scroll, fade to 0 or 0% opacity.
		// The - $(window).scrollTop() / 250 makes it disappear 250 pixels up the page, into the negatives after 0.
		$(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);
	});
});