(function ($) {
	
	"use strict";

	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 130
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) - 130
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Home seperator
	if($('.home-seperator').length) {
		$('.home-seperator .left-item, .home-seperator .right-item').imgfix();
	}


	// Home number counterup
	if($('.count-item').length){
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);



var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(document).ready(function () {
	if (!$.browser.webkit) {
		$('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
	}
});

//create api form sending contact us
$(document).ready(function () {
	$('#contact-form').submit(function (e) {
		e.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

        $.ajax({
			type: "POST",
            url: "contact.php",
            data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
            success: function (data) {
				if (data =='success') {
					$('#name').val('');
					$('#email').val('');
					$('#subject').val('');
					$('#message').val('');
					$('#contact-form').fadeOut();
					$('#success').fadeIn();
					setTimeout(function () {
                        $('#success').fadeOut();
                    }, 3000);
					
                } else {
					$('#contact-form').fadeOut();
                    $('#error').fadeIn();
                    setTimeout(function () {
                        $('#error').fadeOut();
                    }, 3000);
                }
				}
				});
				return false;
				});
				});
				$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                });
				$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                });
				$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                });
				$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                });
				$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                });
				$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                });
				$(document).ready(function () {
					if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
					});
					$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                    });
					$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                    });
					$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                    });
					$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                    });
					$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                    });
					$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                    });
					$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                    });
					$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                    });
					$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                    });
					$(document).ready(function () {
                    if (!$.browser.webkit) {
                        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
                    }
                    });