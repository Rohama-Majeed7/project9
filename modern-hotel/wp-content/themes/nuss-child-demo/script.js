'use strict';
jQuery(document).ready(function($) {
    $('.demo-directional .show-demo').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.demo-directional').toggleClass('open');
    });

    $('.demo-directional .close').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.demo-directional').toggleClass('open');
    });

    function goToByScroll(id) {
        // Remove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        }, 'slow');
    }

    $('.demo-directional a.browse-demos').on('click', function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll(this.id);
    });

    // 	function switchDemoNamesInHeading(){
    // 		let next = $('.name-switch h2 mark.show').removeClass('show').next();
    // 		if(next.length == 0)
    // 			next = $('.name-switch h2 mark:first-child');
    // 		next.addClass('show');
    // 	}
    // 	setInterval(switchDemoNamesInHeading, 1000)
});