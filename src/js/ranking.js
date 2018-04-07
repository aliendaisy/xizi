$(function() {
    var json = [
        {
            "ranking": "1",
            "imgUrl": "../images/getPrize/test.png",
            "nickname": "aaaa",
            "company": "1个公司名字很长很长很长",
            "heartGet": "5",
            "heartDonate": "4",
            "hasHeart": true,
            "readTime": "101:12:14",
            "health": "500000"
        },{
            "ranking": "2",
            "imgUrl": "../images/getPrize/test.png",
            "nickname": "bbbb",
            "company": "1个公司名字很长很长很长",
            "heartGet": "5",
            "heartDonate": "4",
            "hasHeart": true,
            "readTime": "31:12:14",
            "health": "50000"
        },{
            "ranking": "3",
            "imgUrl": "../images/getPrize/test.png",
            "nickname": "cccc",
            "company": "1个公司名字很长很长很长",
            "heartGet": "5",
            "heartDonate": "4",
            "hasHeart": true,
            "readTime": "20:12:14",
            "health": "5000"
        },{
            "ranking": "4",
            "imgUrl": "../images/getPrize/test.png",
            "nickname": "dddd",
            "company": "1个公司名字很长很长很长",
            "heartGet": "",
            "heartDonate": "",
            "hasHeart": false,
            "readTime": "03:12:14",
            "health": "500"
        }
    ];
    $.ajax({
        type: 'post',
        url: '',
        success: function(msg) {
            var list; //获取排行榜数据

            //以下是伪造数据（排行榜内，个人排行没写，可仿）

            $.each(json,function() {
                //1、2、3名切换图片
                var rank = parseInt(this.ranking) > 3 ? this.ranking :
                    '<img src="../images/ranking/ranking-' + this.ranking + '.png" alt="">';
                //判断是否存在爱心值
                var hasHeart =
                    this.hasHeart ?
                    '<p class="heart">已获/已献爱心: ' +
                        '<span>' + this.heartGet + '</span>/<span>' + this.heartDonate + '</span>个' +
                    '</p>' : '';
                var template =
                    '<li class="card">' +
                        '<div class="rank">' + rank + '</div>' +
                        '<div class="imgUrl">' +
                            '<img src="' + this.imgUrl + '" alt="">' +
                        '</div>' +
                        '<div class="details">' +
                            '<div class="line">' +
                                '<div class="nickname">' + this.nickname + '</div>' +
                                '<div class="company">' + this.company + '</div>' +
                            '</div>' +
                            '<div class="line">' +
                                '<div class="column">' +
                                    hasHeart +
                                    '<p class="readTime">阅读时长： <span>' + this.readTime + '</span></p>' +
                                '</div>' +
                                '<div class="health"><span>' + this.health + '</span>营养值</div>' +
                            '</div>' +
                        '</div>' +
                    '</li>';
                $('#ranking-list').append(template);
            });
        },
        error: function() {

        }
    })
});