/*
Usage:
index.html
index1.html
index-old-2022-09-02.html
/help###/alphabetical.html
/manual/alphabetical.html
/manual###/alphabetical.html
Purpose:
This handles user interactions with the navbar
*/
$(document).ready(function() {
	"use strict";
	$(document).ready(function(){
		//SamR 2025-07-09 On click, if the click target is not in #navbar or #navBarItemContainer
		$(document).on('click', function(e) {
			if(!$(e.target).closest('#navbar').length && !$(e.target).closest('#navBarItemContainer').length) {
				if ($("#navbar").attr("class")==="menu-icon") {
				}
				else {
					$("#navbar").removeClass("open");
				}
			}
		});
		
		//SamR 2025-07-09 On screen touch (mobile, tablet, etc)
		$(document).on('touchstart', function (e) {
			if(!$(e.target).closest('#navbar').length && !$(e.target).closest('#navBarItemContainer').length) {
				if ($("#navbar").attr("class")==="menu-icon") {
				}
				else {
					$("#navbar").removeClass("open");
				}
			}
		});
		
		/* We must document.on instead of #navbar.click since this is a template created id*/
		$(document).on('click', '#navbar', function() {
			if ($("#navbar").attr("class")==="menu-icon") {
				$("#navbar").addClass("open");
			} 
			else {
				$("#navbar").removeClass("open");
			}
		});
		
		/* We must document.on instead of .navItem.hover since this is a template created id*/
		$(document).on('mouseenter', 'ul#navBarItemContainer > li > .navItem', function() {
			if($(this).attr("class")==="navItem") { /* Doesnt contain the "open" class*/
				$(this).addClass("open");
			}
			var left=$(this).offset().left;
			if($(this).offset().left+$(this).siblings().outerWidth()>$(window).width()) {
				left=$(window).width()-$(this).siblings().outerWidth()-4; /* Subtract 4 extra pixels so its not right against the edge of the screen*/
			}
			$(this).siblings().offset({
				top:$(this).offset().top+28,/* 30 is the height of the navWrapper.  If that changes, this must change */
				left:left
			});
		});
		
		/* We must document.on instead of .navItem.hover since this is a template created id*/
		$(document).on('mouseleave', 'ul#navBarItemContainer > li > .navItem', function(e) {
			if(!$(e.toElement).siblings().is($(this)) && !$(e.toElement).closest($(this).siblings()).length) {
				if($(this).attr("class")==="navItem open") { /* Contains the "open" class*/
					$(this).removeClass("open");
				}
			}
		});
		
		/* We must document.on instead of .navItem.hover since this is a template created id*/
		$(document).on('mouseleave', 'ul#navBarItemContainer > li > .dropDownMenu', function(e) {
			if(!$(e.toElement).siblings().is($(this))) {
				if($(this).siblings().attr("class")==="navItem open") { /* Contains the "open" class*/
					$(this).siblings().removeClass("open");
				}
			}
		});
		
		$(document).on('click', ".searchButton", function() {
			$("#searchBar").submit();
		});
	});
});