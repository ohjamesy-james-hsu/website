// JavaScript Document
$(document).ready(function() {
	
/*	var i=0;
		
	function start(){
		timer = setInterval(function() {mostra(i);}, 4000);
	}

	function mostra(quin){
	  	$('.pantalla').removeClass('wall'+i)
			i++
			if(i>=4)i=0;
		$('.pantalla').addClass('wall'+i);
	}


	start();
*/	
	
	// ----------- FREEBIES IPHONE SLIDESHOW ----------- //
	var i=0;
		
	function start(){
		timer = setInterval(function() {mostra(i);}, 4000);
	}

	function mostra(quin){
	  	$('.pantalla').css('display','none')
		$('.pantalla').removeClass('wall'+i)
			anterior=i;
			i++
			if(i>=4)i=0;
		$('.pantalla').addClass('wall'+i);
		$('.pantalla').fadeIn(500,function() {
        		$('.pantallaFondo').removeClass('wall'+anterior).addClass('wall'+i)		
      	});
	}
	start();

	// ----------- MAIN MENU ----------- //
	
	$(".menubtn").mouseenter(function() {
			$(this).stop().animate({scrollTop:30},'fast');
	});
	
	$(".menubtn").mouseleave(function() {
			$(this).stop().animate({scrollTop:0},'fast');
	});
	
	
	// ----------- TEAM NEXT/PREV ----------- //
	
	var y=0;
	
	$(".dir-right").click(function() {
		if(!$(this).hasClass('disable-2')){
			$(".jump"+(y+1)).click();
		}
	});
	
	$(".dir-left").click(function() {
		if(!$(this).hasClass('disable')){
			$(".jump"+(y-1)).click();
		}
	});
	
	// ----------- TEAM DOTS ----------- //
	
	
	$(".dots").click(function() {
			$(".teamshow").stop().animate({scrollLeft:pos[$(this).attr('id')]},'slow');
			$('.activo').removeClass('activo');
			$(this).addClass('activo');
			y=parseInt($(this).attr('id'));
			
			if(y==0){$('.dir-left').addClass('disable')}else{$('.dir-left').removeClass('disable');}
			
			if(tamany>2){
				if(y==2){$('.dir-right').addClass('disable-2')}else{$('.dir-right').removeClass('disable-2');}
			}else
			if(tamany==2){
				if(y==4){$('.dir-right').addClass('disable-2');}else{$('.dir-right').removeClass('disable-2');}				
			}else
			if(tamany==1){
				if(y==8){$('.dir-right').addClass('disable-2')}else{$('.dir-right').removeClass('disable-2');}			
			}
	});
	
	recalcul();
	
	  $(window).bind("resize", function(){
		old=tamany;
		recalcul();
		if(old!=tamany){
			$(".jump0").click();
			obre($actual.attr('id')	)
		}
	  });
	  
	function recalcul(){
		res=$(window).width();
		if (res > 959) { tamany=4; pos=[0,940,1880];} else
		if (res > 767) { tamany=3; pos=[0,740,1480]; } else
		if (res > 479) { tamany=2; pos=[0, 463, 923, 1385, 1617];} else
		if (res < 480) { tamany=1; pos=[0, 225, 455, 685, 923, 1150, 1378, 1610, 1845]; }
	}

	// ----------- PORTFOLIO DOTS ----------- //
	function dots(){
	
	var z=1;
	
	$(".jump12").click(function() {
			$(".img-project").stop().animate({scrollLeft:0},'slow');
			$('.activo2').removeClass('activo2');
			$(this).addClass('activo2');
	});
	
	$(".jump22").click(function() {
			$(".img-project").stop().animate({scrollLeft:501},'slow');
			$('.activo2').removeClass('activo2')
			$(this).addClass('activo2');
	});
	
	$(".jump32").click(function() {
			$(".img-project").stop().animate({scrollLeft:1002},'slow');
			$('.activo2').removeClass('activo2')
			$(this).addClass('activo2');
	});
	
	$(".jump42").click(function() {
			$(".img-project").stop().animate({scrollLeft:1503},'slow');
			$('.activo2').removeClass('activo2')
			$(this).addClass('activo2');
	});
	$(".jump52").click(function() {
			$(".img-project").stop().animate({scrollLeft:2004},'slow');
			$('.activo2').removeClass('activo2')
			$(this).addClass('activo2');
	});
	}


	// ----------------- EASING ANCHORS ------------------ //
	
	$('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});// JavaScript Document