$(function(){
    $(".menubtn").click(function(){
        $(".sidenav").animate({width: '300px'}, 500);        
    });

    $("main,footer").click(function(){
        $(".sidenav").animate({width: '0'}, 500);
    });

    $(".login p").click(function(){
        $(".login #loginbtn").css('display', 'none');
        $(".login form").css('display', 'flex');
        $(".loginfield").animate({width: '150px'}, 500);
    });
});

function showLoginError(){
    $(".login #loginbtn").css('display', 'none');
    $(".login form").css('display', 'flex');
    $(".loginfield").css('width', '150px');
};