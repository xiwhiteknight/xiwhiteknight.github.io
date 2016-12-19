var isVisible;


$(document).ready(function()
{
    $(".test").hide(0).delay(500).fadeIn(3000)
});

$(function(){
	$('.navitem').click(function(e){


		var linkhref = $(this).attr('href');
		console.log($(linkhref).offset().top);

		$('body').animate({

			scrollTop: $(linkhref).offset().top

		}, 'slow');
	
		e.preventDefault();

	});
});

$('#home').click(function ()
{
	if(isVisible == true)
	{
		$('.nav').slideToggle()
		isVisible = false;
	}
});

$('.navbtn').click(function(){

	$('.nav').slideToggle()

	if (isVisible == true)
	{
		isVisible = false;
	}
	else
	{
		isVisible = true;
	}
});
			
$('.nav').click(function () 
{
	if($(window).width() < 1919)
	{
		$('.nav').slideToggle()
	}
});





