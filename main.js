
$(function(){

var width=960;
var animationSpeed = 400;
var pause = 4000;
var currentSlide = 1;

var $slider = $('#slider');
var $slideContainer = $slider.find('.slides');
var $slides = $slideContainer.find('.slide');

var interval;
function startSlider(){
interval = setInterval(function(){
	$slideContainer.animate({'margin-left':'-='+width}, animationSpeed, function(){
     currentSlide++;
     if (currentSlide === $slides.length) {
     	currentSlide = 1;
     	$slideContainer.css('margin-left', 0);
     }
	});
}, pause);
}

function stopSlider(){
	clearInterval(interval);
}

$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
startSlider();

});








$('#btn1').click(function(){
	$('.desc1').slideToggle();
})

$('#btn2').click(function(){
	$('.desc2').slideToggle();
})

$('#btn3').click(function(){
	$('.desc3').slideToggle();
})

$('#btn4').click(function(){
	$('.desc4').slideToggle();
})

$('#btn5').click(function(){
	$('.desc5').slideToggle();
})



var timer = document.getElementById('timer');
var loop;
function displayTime (){
var sada = new Date();
var h =("0" + sada.getHours()).slice(-2);
var m =("0" + sada.getMinutes()).slice(-2);
var s =("0" + sada.getSeconds()).slice(-2);

 timer.innerHTML = h+'h:'+m+"m:"+s+"s"
}
loop = setInterval(displayTime,1000);





var current = document.getElementById('front');
var slike = document.getElementsByClassName('pictures');
for (var i=0; i<slike.length; i++){
slike [i].addEventListener('click',display);
   }
function display(){
	var sl =this.getAttribute('src');
	current.setAttribute('src',sl);
}

function sleep (){
i++;
		if (i > 2){
			i = 0;
		ar = makeText();
		}
		scroll.innerHTML = "";
		start();	
}
function makeText (){
var text = 'Planet Earth...';
var text1 = 'Beautiful nature...';
var text2 = 'Animal world';

var stext = text.split('');
var stext1 = text1.split('');
var stext2 = text2.split('');
var nasArray = [stext,stext1,stext2];
return nasArray;
}

var ar = makeText();
var loop;
var scroll = document.getElementById('scroll')

var i = 0;


function start (){
	if(ar[i].length > 0){
		scroll.innerHTML += ar[i].shift();
        loop = setTimeout(start,200);
	}else{
		var sl = setTimeout (sleep,2000);
	}
}
start();


