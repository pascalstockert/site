import '../scss/style.scss';

const dogePics = ['/src/img/joey1.jpg', '/src/img/joey2.jpg', '/src/img/joey3.jpg', '/src/img/joey4.jpg']
const foodPics = ['/src/img/food_1.jpg', '/src/img/food_2.jpg', '/src/img/food_3.jpg', '/src/img/food_4.jpg', '/src/img/food_5.jpg']
const barcePics = ['/src/img/barce_1.jpg', '/src/img/barce_2.jpg', '/src/img/barce_3.jpg', '/src/img/barce_4.jpg', '/src/img/barce_5.jpg', '/src/img/barce_6_1.jpg', '/src/img/barce_6_2.jpg', '/src/img/barce_6_3.jpg', '/src/img/barce_7.jpg', '/src/img/barce_8.jpg', '/src/img/barce_9.jpg', '/src/img/barce_10.jpg', '/src/img/barce_11.jpg', '/src/img/barce_12.jpg', '/src/img/barce_13.jpg']

const dogeSlider = document.getElementById('carouselDoge');
const foodSlider = document.getElementById('carouselFood');
const barceSlider = document.getElementById('carouselBarce');

for (var i = 0; i < dogePics.length; i++) {
	dogeSlider.innerHTML += '<img class="carousel-item" src="' + dogePics[i] + '">';
}
for (var i = 0; i < foodPics.length; i++) {
	foodSlider.innerHTML += '<img class="carousel-item" src="' + foodPics[i] + '">';
}
for (var i = 0; i < barcePics.length; i++) {
	barceSlider.innerHTML += '<img class="carousel-item" src="' + barcePics[i] + '">';
}

$(document).ready(function(){
  $('#carouselDoge').carousel(
  {
  	duration: 300,
    fullWidth: true,
    indicators: true,
    numVisible: 1,
    dist: 0,
    noWrap: true,
  });
  setTimeout(function(){
  	$('#carouselFood').carousel(
	  {
	  	duration: 300,
	    fullWidth: true,
	    indicators: true,
	    numVisible: 1,
	    dist: 0,
	    noWrap: true,
	  });

    $('#carouselBarce').carousel(
    {
      duration: 300,
      fullWidth: true,
      indicators: true,
      numVisible: 1,
      dist: 0,
      noWrap: true,
    });
  }, 100);
});

$('#nextDoge').click(function() {
	$('#carouselDoge').carousel('next');
});

$('#nextFood').click(function() {
	$('#carouselFood').carousel('next');
});

$('#nextBarce').click(function() {
	$('#carouselBarce').carousel('next');
});