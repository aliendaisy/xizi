//底部tab切换
var arr = [];
$.each($('.tab'),function() {
    var src = $(this).find('img').attr('src');
    arr.push(src);
});

$('.tab').click(function() {
    var i = $(this).index();

    //更新数组
    $.each(arr,function(index) {
        if(index === i) {
            arr[index] = this.replace('grey','golden');
        }else{
            arr[index] = this.replace('golden','grey');
        }
    });

    //改变文字样式
    $('.tab').removeClass('tab-active');
    $(this).addClass('tab-active');

    //改变图标样式
    $.each($('.tab'),function(index) {
        $(this).find('img').attr('src',arr[index])
    });
});


//随机定位营养值气泡位置
var base = document.documentElement.clientWidth / 750 * 100;

var bubble = [
    10,20,10,20,5
];

$.each(bubble,function() {
    var randomX = (Math.random() * 100) + '%';
    var randomY = (Math.random() * 100) + '%';
    if(this <= 10) {
        var light =
            '<div class="bubble bubble-light" style="bottom:' + randomY + ';right:' + randomX + '">' +
                '<p>营养值</p>' +
                '<p>+' + this + '</p>' +
            '</div>';
        $('.bubble-area').append(light);
    }else{
        var dark =
            '<div class="bubble bubble-dark" style="bottom:' + randomY + ';right:' + randomX + '">' +
                '<p>营养值</p>' +
                '<p>+' + this + '</p>' +
            '</div>';
        $('.bubble-area').append(dark);
    }
});

//营养值收取
$('.bubble').click(function() {
    var self = this;
    //气泡点击动画
    $(this).css({
        width: 0,
        height: 0,
        bottom: -base,
        right: 1.6 * base,
        opacity: 0
    });

    setTimeout(function() {
        //清除已收的dom
        $(self).remove();
        //小船动画
        $('.boat').css({
            animation: 'bounce linear 2s'
        });
        setTimeout(function() {
            $('.boat').css({
                animation: 'none'
            });
        },2000);
    },500);
});

//礼物处弹出框动画
var dialog = '<p>再分享<span>X</span>天就可以领取礼物了哦</p>';
$('#gift').click(function() {
    $('.dialog').css({
        width: 2.14 * base,
        height: .8 * base
    });
    setTimeout(function() {
        $('.dialog').append(dialog);
    },1000);
});