/*--------------------- Copyright (c) 2018 -----------------------
[Master Javascript]
s
-------------------------------------------------------------------*/
(function($){
  "use strict";
	
	// Preloader Js
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(200).fadeOut("slow");
	});
	
	// ready function
	jQuery(document).ready(function($){
   		var $this = $(window);
	
	//bg window height Js
	var window_height = window.innerHeight;
		$(".prt_home_wrapper").css("height", window_height);
	
	//Portfolio Load More
	$(".prt_loadmore").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".prt_loadmore:hidden").slice(0, 5).slideDown();
        if ($(".prt_loadmore:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
	
	// for counter 
	$('.timer').appear(function() {
		$(this).countTo();
	});
	
	// About Page Profile Slider Js
	$('.prt_profile_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	
	//Skills Charts
	$('.prt_skills_wrapper').appear(function() {
		var circle1 = Circles.create({
			id: 'circles-1',
			value: 70,
			radius: 100,
			number: 90,
			text: '70%',		
			width: 8,
			colors: ["#202020", "#00c8ff"],
			duration: 900
		});
		var circle2 = Circles.create({
			id: 'circles-2',
			value: 80,
			radius: 100,
			number: 80,
			text: '80%',
			width: 8,
			colors: ["#202020", "#ff8511"],
			duration: 900
		});
		var circle3 = Circles.create({
			id: 'circles-3',
			value: 75,
			radius: 100,
			number: 75,
			text: '75%',
			width: 8,
			colors: ["#202020", "#f26525"],
			duration: 900
		});
		var circle4 = Circles.create({
			id: 'circles-4',
			value: 60,
			radius: 100,
			number: 70,
			text: '60%',
			width: 8,
			colors: ["#202020", "#1d8bbe"],
			duration: 900
		});
	});
	
	// Service Page Client Slider Js
	$('.prt_client_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		nav:false,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
	
	// Portfolio popup Js
	$('.popup-gallery').magnificPopup({
		delegate: 'a.imageopen',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	
	// Portfolio video Popup js
	$('a.popup-youtube').magnificPopup({
		disableOn: 0,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	
	// Service Page Image Slides Js
	$('div.prt_img_click').on('click' , function(){
		if(!$(this).hasClass('active')){
			$('div.prt_services_slider_imgs img').removeClass('active');
			var target = $('div.prt_services_slider_imgs .img_'+$(this).attr('id'));
			var targetImg = target[0].outerHTML;
			target.remove();
			$('div.prt_services_slider_imgs').prepend(targetImg);
			$('div.prt_services_slider_imgs img:first').addClass('active');
			$('div.prt_services_slider_box .prt_img_click').removeClass('active');
			$(this).addClass('active');	
		}
	});
	
	// Open Close main Section Js
	var AplCss;
	var targetSection;
	var tar;
	var timing = 500;
	$('div.prt_menu_wrapper a').on('click' , function(e){
		e.preventDefault();
		tar = $(this).attr('href').split('#')[1];
		targetSection = $('.prt_'+tar+'_wrapper');
		if(tar == 'about'){
			AplCss  = {'top':0};
		}else if(tar == 'contact'){
			AplCss  = {'left':0};
		}else if(tar == 'services'){
			AplCss  = {'bottom':0 , 'top':0};
		}else if(tar == 'portfolio'){
			AplCss  = {'right':0};
		}
		targetSection.css('display', 'block');
		targetSection.animate(AplCss, timing);
	});
	$('img.prt_close').on('click' , function(){
		hide_section();
	});
	
	$('img#prt_close_tab').on('click' , function(){
		hide_section();
	});
	function hide_section(){
		if(tar == 'about'){
			AplCss  = {'display':'none', 'top':'-100%'};
		}else if(tar == 'contact'){
			AplCss  = {'display':'none','left':'100%'};
		}else if(tar == 'services'){
			AplCss  = {'display':'none','bottom':'0' , 'top':'100%'};
		}else if(tar == 'portfolio'){
			AplCss  = {'display':'none','right':'100%'};
		}
		setTimeout(function(){ targetSection.css('display', 'none'); }, timing);
		targetSection.animate(AplCss, timing);
	};
	
	// Contact Form Submission
	function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return check;
	}
	$(".submitForm").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var check = checkRequire(targetForm , errroTarget);
		if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('form-type'));
			$.ajax({
				method : 'post',
				url : 'ajax.php',
				data:formDetail,
				cache:false,
				contentType: false,
				processData: false
			}).done(function(resp){
				if(resp == 1){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
				}
			});
		}
	});
		
	});
	
})();

/* paralax effect */ 

jQuery(document).ready(function($){
	//define store some initial variables
	var	halfWindowH = $(window).height()*0.5,
		halfWindowW = $(window).width()*0.5,
		//define a max rotation value (X and Y axises)
		maxRotationY = 5,
		maxRotationX = 3,
		aspectRatio;

	//detect if hero <img> has been loaded and evaluate its aspect-ratio
	$('.cd-floating-background').find('img').eq(0).load(function() {
		aspectRatio = $(this).width()/$(this).height();
  		if( $('html').hasClass('preserve-3d') ) initBackground();
	}).each(function() {
		//check if image was previously load - if yes, trigger load event
  		if(this.complete) $(this).load();
	});
	
	//detect mouse movement
	$('.cd-background-wrapper').each(function(){
		$(this).on('mousemove', function(event){
			var wrapperOffsetTop = $(this).offset().top;
			if( $('html').hasClass('preserve-3d') ) {
				window.requestAnimationFrame(function(){
					moveBackground(event, wrapperOffsetTop);
				});
			}
		});
	});

	//on resize - adjust .cd-background-wrapper and .cd-floating-background dimentions and position
	$(window).on('resize', function(){
		if( $('html').hasClass('preserve-3d') ) {
			window.requestAnimationFrame(function(){
				halfWindowH = $(window).height()*0.5,
				halfWindowW = $(window).width()*0.5;
				initBackground();
			});
		} else {
			$('.cd-background-wrapper').attr('style', '');
			$('.cd-floating-background').attr('style', '').removeClass('is-absolute');
		}
	});

	function initBackground() {
		var wrapperHeight = Math.ceil(halfWindowW*2/aspectRatio), 
			proportions = ( maxRotationY > maxRotationX ) ? 1.1/(Math.sin(Math.PI / 2 - maxRotationY*Math.PI/180)) : 1.1/(Math.sin(Math.PI / 2 - maxRotationX*Math.PI/180)),
			newImageWidth = Math.ceil(halfWindowW*2*proportions),
			newImageHeight = Math.ceil(newImageWidth/aspectRatio),
			newLeft = halfWindowW - newImageWidth/2,
			newTop = (wrapperHeight - newImageHeight)/2;

		//set an height for the .cd-background-wrapper
		$('.cd-background-wrapper').css({
			'height' : wrapperHeight,
		});
		//set dimentions and position of the .cd-background-wrapper		
		$('.cd-floating-background').addClass('is-absolute').css({
			'left' : newLeft,
			'top' : newTop,
			'width' : newImageWidth,
		});
	}

	function moveBackground(event, topOffset) {
		var rotateY = ((-event.pageX+halfWindowW)/halfWindowW)*maxRotationY,
			yPosition = event.pageY - topOffset,
			rotateX = ((yPosition-halfWindowH)/halfWindowH)*maxRotationX;

		if( rotateY > maxRotationY) rotateY = maxRotationY;
		if( rotateY < -maxRotationY ) rotateY = -maxRotationY;
		if( rotateX > maxRotationX) rotateX = maxRotationX;
		if( rotateX < -maxRotationX ) rotateX = -maxRotationX;

		$('.cd-floating-background').css({
			'-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		    '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
			'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
		});
	}
});

/* 	Detect "transform-style: preserve-3d" support, or update csstransforms3d for IE10 ? #762
	https://github.com/Modernizr/Modernizr/issues/762 */
(function getPerspective(){
  var element = document.createElement('p'),
      html = document.getElementsByTagName('html')[0],
      body = document.getElementsByTagName('body')[0],
      propertys = {
        'webkitTransformStyle':'-webkit-transform-style',
        'MozTransformStyle':'-moz-transform-style',
        'msTransformStyle':'-ms-transform-style',
        'transformStyle':'transform-style'
      };

    body.insertBefore(element, null);

    for (var i in propertys) {
        if (element.style[i] !== undefined) {
            element.style[i] = "preserve-3d";
        }
    }

    var st = window.getComputedStyle(element, null),
        transform = st.getPropertyValue("-webkit-transform-style") ||
                    st.getPropertyValue("-moz-transform-style") ||
                    st.getPropertyValue("-ms-transform-style") ||
                    st.getPropertyValue("transform-style");

    if(transform!=='preserve-3d'){
      html.className += ' no-preserve-3d';
    } else {
    	html.className += ' preserve-3d';
    }
    document.body.removeChild(element);

})();