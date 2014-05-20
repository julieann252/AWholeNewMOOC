$(document).ready(function(){
	//start nav toggle
	$("ul ul").hide();
	$("a.submenu").click(function(evt) {
		$(this).toggleClass('on');
		evt.preventDefault();
		$(this).next('ul').toggle();
	});
	//end nav toggle

	//start nav height set
	setnav = function() {
		var navheight = $(document).height();
		$('nav').css('min-height', navheight);
	}
	setnav();
	//end nav height set
});