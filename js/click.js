$(document).ready(function () {
    $(".btn_login").click(function () {
        $(".login").show();
    })
    $(".btn_close").click(function () {
        // $(".login").hide();
        // $(".logup").hide();
        window.location.reload();
    })
    $(".qrlogin").click(function () {
        $(".mid").hide();
        $(".qrcode").show();
    })
    $(".accountlogin").click(function () {
        $(".qrcode").hide();
        $(".mid").show();
    })
    $(".btn_logup").click(function () {
        $(".login").hide();
        $(".logup").show();
    })
    $(".signup").click(function () {
        $(".userinfo").hide();
        $(".succes").show();
    })
    $(".ok").click(function () {
        // $(".logup").hide();
        $(location).attr("href", "account.html");
    })
    $(".submit").click(function () {
        $(".login_con").hide();
        $(".auth").show();
    })
    $(".comfirm").click(function () {
        $(".auth").hide();
        $(".login_con").show();
    })
})

$(function () {
    var n = 0;
    $(".next").click(function () {
        n++;
        if (n == 3) {
            n = 0;
        };
        change();
    })
    $(".prev").click(function () {
        n--;
        change();
    })

    setInterval(function(){
        n++;
        change();
    },3000)

    function change() {
        if (n == 3) {
            n = 0;
        };

        if (n == -1) {
            n = 2
        };

        $(".banner>ul>li").eq(n).fadeIn(300).siblings().hide();
    }
})

// $(function(){
//     $(".nav>ul>li>a").click(function(){
//         $(this).next().stop().slideToggle();
//     })
// })