$(document).ready(function() { //when the document is ready...

/*
$('div').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if (isInView) {
    // element is now visible in the viewport
    if (visiblePartY == 'top') {
      // top part of element is visible
    } else if (visiblePartY == 'bottom') {
      // bottom part of element is visible
    } else {
      // whole part of element is visible
    }
  } else {
    // element has gone out of viewport
  }
});
*/

	//apply the class "inview" to a section that is in the viewport
/*	$('.bgsepara').bind('inview', function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
*/	
	$(window).bind("scroll", function(){//when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});

	function Move(){ 
//		if($('.bgsepara').hasClass("inview")){
			num = ($(window).scrollTop()/3);
			$('.bgsepara').css('background-position', '0 '+num+'px');
			$('#banner').css('background-position', '0 '+num+'px'); 
//		}
		//newPos(0, windowHeight, pos, 500, 0)
	}
	
	
});