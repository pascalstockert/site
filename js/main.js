import '../scss/style.scss';

var swiper = new Swiper ('.swiper-doge', {
    speed: 300,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/
});

const dogePics = ['/src/img/joey1', '/src/img/joey2', '/src/img/joey3', '/src/img/joey4']
const foodPics = ['/src/img/food1', '/src/img/food2', '/src/img/food3', '/src/img/food4', '/src/img/food5', ]
const barcePics = ['/src/img/barce1', '/src/img/barce2', '/src/img/barce3', '/src/img/barce4', '/src/img/barce5', '/src/img/barce6', '/src/img/barce7', '/src/img/barce8', '/src/img/barce9', '/src/img/barce10', '/src/img/barce11', '/src/img/barce12', '/src/img/barce13']

const dogeSlider = document.getElementById('doge');
const foodSlider = document.getElementById('food');
const barceSlider = document.getElementById('barce');

window.alert(dogePics.length);

for (var i = 0; i < dogePics.length; i++) {
    dogeSlider.innerHTML += "<img class='swiper-slide' src='" + dogePics[i] + ".jpg'>";
}
