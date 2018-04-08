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

//场景切换
function change(url) {
    $('.right-cloud').css({animation: 'cloudRight ease-in-out 5s'});
    $('.left-cloud').css({animation: 'cloudLeft ease-in-out 5s'});

    //切换背景图片
    setTimeout(function() {
        $('main').css({
            "background": 'url(' + url + ') no-repeat',
            "backgroundSize": '100%'
        });
    },2500);

    //转场动画结束后恢复初始化状态
    $('.right-cloud,.left-cloud').on('animationend',function() {
        $(this).css({animation: 'none'});
    });
}

//这里写的是假数据，实际根据接口
var healthNum = 0;
var time = setInterval(function() {
    healthNum += 1000;
    console.log(healthNum)
    if(healthNum >= 6000) {
        clearInterval(time);
        return;
    }
    if(healthNum >= 4000) {
        change("../images/game/pic_game_bg3.png");
    }else if(healthNum >= 2000) {
        change("../images/game/pic_game_bg2.png");
    }

    judgeBg();

},5000);

//判断是否是场景3显示爱心
function judgeBg() {
    var mainBg = $('main').css('backgroundImage').split("(")[1].split(")")[0];
    var str = mainBg.substr(mainBg.length - 6);
    if(str === '3.png"') {
        $('.heart').show();
    }
}
judgeBg();