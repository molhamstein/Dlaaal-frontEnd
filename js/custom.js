$( document ).ready(function() {
	var Menu = $("#Menu");
	var menuPosition = Menu.offset().top;
	var currentScroll = $(window).scrollTop();
	var ItemsContainer = $(".ItemsContainer");
	var Content = $(".Content");

	$(window).resize(function() {
		menuPosition = Menu.offset().top;
		currentScroll = $(window).scrollTop();
	});

	$(window).scroll(function() {

	    currentScroll = $(window).scrollTop();
	    //Temporary workaround
	    if (currentScroll >= ( menuPosition + Menu.height()/3) && (Content.height()>1350) ) {
	        // ItemsContainer.addClass('u-trans');
	        ItemsContainer.css('margin-top', (Menu.height()*4/3 + 25 )+'px');
	        Menu.addClass("MenuContainer--isFixed");
	    } else {
	    	// ItemsContainer.removeClass('u-trans');
	        ItemsContainer.css('margin-top', '0px');
	        Menu.removeClass("MenuContainer--isFixed");
	    }
	});
});
