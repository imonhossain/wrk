jQuery(window).bind('scroll', function (){
  if (jQuery(window).scrollTop() > 900){
    jQuery('#sticky_navigation').addClass('navbar-fixed-top');
  } else {
    jQuery('#sticky_navigation').removeClass('navbar-fixed-top');
  }
});

$(document).ready(function(){
	//active nave menu
			$(".navbar-nav li a").click(function(){
				  $(".navbar-nav li a").removeClass("active");
				  $(this).addClass("active");
				 
			   }); 
			   
			   //active portfolio menu
			$(".portfolio_filter ul li a:hover").click(function(){
				  $(".navbar-nav li a").removeClass("active");
				  $(this).addClass("active");
				 
			   });  
			   $(".nav-active").css({"color":"#fff", "background":"#212121"});
	  /* $(".portfolio_contents ul li ").eq(3).css({"margin-left":"338px"});
	 $(".portfolio_contents ul li ").eq(8).css({"margin-left":"338px"}); 
	 $(".portfolio_contents ul li ").css({"overflow":"hidden"}); */
	 
	 $(".icon-center .single-icon").hover(function(){
		$(this).find(".single1").stop().fadeIn(500);
		$(this).find(".absolute1 i").stop().fadeIn(500);
		$(this).stop().css("border-color", "#1ab4ef");
	},
	function(){
		$(this).find(".single1").stop().fadeOut(500);
		$(this).find(".absolute1 i").stop().fadeOut(500);
		$(this).stop().css("border-color", "#fff");
	}
	);
	 
	 
	
	
	$(".single_portfolios .overly").css({"opacity":"0.0"});
	$(".single_portfolios").hover(function(){
		$(this).find(".overly").stop().animate({"opacity":"0.8"});
	},
	function(){
		$(this).find(".overly").stop().animate({"opacity":"0.0"});
	}
	);
	
	$(".member-icon .hover").hover(function(){
		/* $(".team-mem-icon").css({"color":"red"}); */
		$(this).find(".mb-sol-icon").stop().css({"background":"#cd2929"});
},
	function(){
		$(this).find(".mb-sol-icon").stop().css({"background":"#1c1b1b"});
	}
	);
	
	
	$(".member-icon").css({"opacity":"0.0"});
	$(".member-image.rotate45").hover(function(){
		/* $(".team-mem-icon").css({"color":"red"}); */
		$(this).find(".member-icon").stop().animate({"opacity":"1"});
},
	function(){
		$(this).find(".member-icon").stop().animate({"opacity":"0.0"});
	}
	);
	
	
	$(".icon-center2 .single-icon").hover(function(){
		/* $(".team-mem-icon").css({"color":"red"}); */
		$(this).find(".single-fa-icon").stop().animate(1000).css({"color":"#1ab4ef"});
		$(this).stop().css({"border-color":"#1ab4ef"})
},
	function(){
		$(this).find(".single-fa-icon").stop().css({"color":"#fff"});
		$(this).stop().css({"border-color":"#fff"})
	}
	);
	
	$(".sing-a-cover").hover(function(){
		/* $(".team-mem-icon").css({"color":"red"}); */
		$(this).find(".single-feature-icon").stop().animate(1000).css({"background-color":"#7D1935"});
		$(this).find(".single-fa-icon").stop().animate(500).css({"color":"#1ab4ef"});	
	},
	function(){
		$(this).find(".single-feature-icon").stop().css({"background-color":"#cd2929"});
		$(this).find(".single-fa-icon").stop().css({"color":"#fff"});
	}
	);
	$(".slider-bottom").hover(function(){
		/* $(".team-mem-icon").css({"color":"red"}); */
		$(this).stop().animate(1000).css({"background-color":"#7D1935"});
		$(this).find(".single-fa-icon").stop().animate(500).css({"color":"#1ab4ef"});	
	},
	function(){
		$(this).stop().css({"background-color":"#cd2929"});
		$(this).find(".single-fa-icon").stop().css({"color":"#fff"});
	}
	);
	
	

		$(".portfolio_contents ul li .single_portfolio .over-content").css({"opacity":"0.0"});
	$(".single_portfolio").hover(function(){
		/* $(".team-mem-icon").css({"color":"red"}); */
		$(this).find(".over-content").stop().animate({"opacity":"1"});
},
	function(){
		$(this).find(".over-content").stop().animate({"opacity":"0.0"});
	});

			$('.bxslider').bxSlider({
                 mode: 'horizontal',
                 slideMargin: 5,
                 auto:true
             });  

		/* (function(){
			 $("#error_name").hide();
			 
			 var error_name= false;
			 
			 $("#name").focusout(function(){
				 check_username();
			 });
		function check_username(){
		var name_length = $("#name").val().length;
		if(name_length < 5 || name_length >20){
			$("#error_name").html("Please Input Name 5-20 carecter");
			$("#error_name").show();
			error_name = true;
		}
		else{
			$("#error_name").hide();
			
		};
	};
	$("#myform").submit(function(){
		var error_name = false;
		if(error_name == false){
			return true;
		}else{
			return false;
		}
	})
}); */	 

	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('.about-area').parallax("50%", 0.3);
	$('.twitter-feed-area').parallax("50%", 0.3);
	$('.feedback-area').parallax("50%", 0.4);
	$('.clients-area').parallax("50%", 0.4);
	$('.testimonial-area').parallax("50%", 0.2);

	

		$(".fancybox").fancybox();
		$(".fancybox2").fancybox();

			   
}); 
$(window).load(function() { // makes sure the whole site is loaded
	$('.spiner-preloder').fadeOut(); // will first fade out the loading animation
	$('.preloder').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').removeClass("aciver-preloder");
})
  

/* $(document).ready(function(){
	$(".single-icon").eq(0).hover(function(){
		$(".single-icon .absolute i.icon-facebook").css({"color":"#1ab4ef","background":"blue",});
	});
	$(".single-icon").eq(1).hover(function(){
		$(".single-icon .absolute i.icon-twitter").css("color" , "blue");
	});
	$(".single-icon").mouseleave(function(){
		$(".single-icon .absolute i").css("color" , "white");
	});
})  */