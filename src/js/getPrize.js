$(function() {
    $.ajax({
        type: 'post',
        url: '',
        data: {},
        success: function(msg) {
            //请求成功后判断可领取状态
            var duration = '2018-4-23 00:00:00至2018-11-9 23：59：59'; //获取活动时间
            var address = '浙江省杭州市xx区xx路xxxx'; //获取领取地点
            var url; //获取奖品图片地址
            var name; //获取奖品名称

            $('#duration').html(duration);
            $('#address').html(address);
            $('#prizeUrl').attr('src',url);
            $('#prizeName').html(name);

            if('可领取'){
                var code = 'fmt123456'; //获取支持号
                $('#code').html(code);

                $('.able').show();
                $('.disable').hide();


            }else{

                var days = '25'; //获取差的天数
                $('#days').html(days)

                $('.able').hide();
                $('.disable').show();


            }
        },
        error: function() {

        }
    })
});