/**
 * 返回顶部功能函数封装
 * 2020-11-11 萝卜
 * 参数说明：
 * imgUrl:图片地址
 * bottom：按钮和顶部的距离
 */
//当页面加载完成
$(function(){
    //把函数挂载在window上， 暴露出去
    window.gotoTop = function(options){ 
        
        //默认参数
        var defaults = {
            bottom:'100px'
        }

        var param = $.extend({},defaults,options)

    //准备结构
    var $gotoTopHtml = $(`<div class="backToTop">
                        <img src="${options.imgUrl}" alt="">
                        </div>`);
    //写样式定位
    $gotoTopHtml.css({
        width:'30px',
        height:'50px',
        position:'fixed',
        bottom: '100px',
        left: '640px',
        marginLeft:'50%',
        display: 'none',
    });
    //返回顶部的js
    /*返回顶部*/
    //点击事件
    $(document).scroll(function(){
        //获取距离顶部的位置
        var topDistance = $('html,body').scrollTop();
        //判断
        if(topDistance > 500){
            $('.backToTop').fadeIn();
        }else{
            $('.backToTop').fadeOut();
        }
    });
    //返回顶部功能(动态添加元素，需要使用事件委托，才能绑定事件)
    $('body').on('click','.backToTop', function(){
        $('html,body').animate({
            scrollTop:0
        },30)
    })
    //追加到页面的尾部
    $('body').append($gotoTopHtml)
    }          
});