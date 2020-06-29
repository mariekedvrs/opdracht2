document.addEventListener("DOMContentLoaded", function(event) {

	var sun = document.getElementById('sun');
	var comet = document.getElementById('comet');

	var tl1 = new TimelineMax({repeat:-1})
	tl1.to(sun, 4, {opacity:0, ease:Power4.easeOut})
	.to(sun, 4, {left: '37%', top:'10%', opacity:1, ease:Power4.easeOut})
	.to(sun, 4, {opacity:0, ease:Power4.easeOut})
	.from(sun, 1, {left: '0%', opacity:0, ease:Power4.easeOut});

	var tl2 = new TimelineMax({repeat:-1})
	tl2.to(comet, 4, {opacity:0, ease:Power4.easeOut})
	.to(comet, 4, {left: '97%', top:'50%', opacity:1, ease:Power4.easeOut})
	.to(comet, 4, {opacity:0, ease:Power4.easeOut})
	.from(comet, 1, {left: '0%', opacity:0, ease:Power4.easeOut});

});