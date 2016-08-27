$(document).ready(function() { 
					   
	$(".HomeClipThumb").mouseover(function() {
		$(this).addClass('HomeClipThumbHighlight');						   
		var c = $(this).find(".color");
		c.fadeTo(200, 1);
	});
	
	$(".HomeClipThumb").mouseleave(function() {			
		$(this).removeClass('HomeClipThumbHighlight');						   									
		var d = $(this).find(".color");
		d.fadeTo(300, 0);
	});
	
	$("#WorkLink").click(function() {
		goTo("#Work");
		return false;
	});
	
	$("#RecogLink").click(function() {
		goTo("#Recognition");
		return false;
	});
	
	$("#ExpLink").click(function() {
		goTo("#Experience");
		return false;
	});
	
	$("#DesignLink").click(function() {
		goTo("#Design");
		return false;
	});

	function goTo(e) {
		$("html").animate({ scrollTop: $(e).attr("offsetTop") -50	}, 500);	
	}
	
});