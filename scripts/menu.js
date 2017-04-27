
$(function(){
	var ind;
	$('.navlist .nav li').hover(function() {
		$('.menu').slideDown();
		ind = $(this).index();
		$('.menu1').eq(ind).show().siblings('.menu1').hide();
	});
	$('.mynav').on('mouseleave', function(event) {
		$('.menu').slideUp();
	});
});





















