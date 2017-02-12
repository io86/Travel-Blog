$(document).ready(function()  {
	//Hover effect in media icons
	$('.media-icons i, .media-icons-footer i').hover(function()  {
		$(this).css("color", "#8B0000");
	},
    function()  {
	    $(this).css("color", "#000000");
	});
	
	//Hover effect in part "Information"
	//Change in border of part information and insert the right arrow
	$('.information').hover(function()  {
	    $(this).css("border", "3px solid red");
		$(this).append('<i class="fa fa-long-arrow-right arrow-on-image" style="font-size:50px"></i>');
	},
	function()  {
        $(this).css("border", "none");
	});
	//FadeOut the image in first part information
	$('.information-first').hover(function()  {
	    $('.information-first img').fadeOut();
    },
	function()  {
		$('.information-first img').fadeIn();
		$('i').remove();
    });	
	//FadeOut the image in second part information
    $('.information-second').hover(function()  {
	    $('.information-second img').fadeOut();
    },
	function()  {
		$('.information-second img').fadeIn();
		$('i').remove();
    });
	//FadeOut the image in third part information
	$('.information-third').hover(function()  {
	    $('.information-third img').fadeOut();
    },
	function()  {
		$('.information-third img').fadeIn();
		$('i').remove();
    });
	//Hover effect in text in the clickable div "Most Shared"
	$('.all-shared').hover(function()  {
	    $('.all-shared h5').css("fontSize", "15px");
	},
	function()  {
		$('.all-shared h5').css("fontSize", "14px");
	});
	 
	//Hover effect in images in "Most Shared" articles
	$('.every-shared-article img').hover(function()  {
		$(this).css("opacity", "0.8");
	},
	function()  {
		$(this).css("opacity", "1");
	});
	//Hover effect in text in "Most Shared" articles
	$('.every-shared-article h5').hover(function()  {
		$(this).css("color", "#006400");
	},
	function()  {
		$(this).css("color", "#000000");
	});
});