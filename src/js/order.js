
var base = document.documentElement.clientWidth / 750 * 100;

//在请求数据后 遍历数组数据，把template模版append到swiper-wrapper中，之后再实例化Swiper；
var template =
    '<div class="swiper-slide">' +
        '<img src="../images/getPrize/test.png" alt="" class="book-img">' +
        '<p class="book-time">2018-03-06</p>' +
    '</div>';

$('.swiper-wrapper').append(template);

var mySwiper = new Swiper('.swiper-container', {
    autoplay: false,
    freeMode: true,
    width: 1.48 * base,
});


var flag = true;
if(flag) {
    $('.freeTime').show();
    $('.orderBtn').hide();
}else{
    $('.freeTime').hide();
    $('.orderBtn').show();
}
