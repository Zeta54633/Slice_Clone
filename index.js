
$(document).scroll(function(){
    var pos=$(document).scrollTop();
    if(pos>=800 && pos<=1330)
    {
        var a=(pos-800)/53 -10;
        $(".connect.one").css('transform','rotate('+a+'deg)');
    }
    
    if(pos>=2300 && pos<=2820)
    {
        var a=(pos-2300)/52 -10;
        $(".connect.two").css('transform','rotate('+a+'deg)');
    }
    
    if(pos>=3800 && pos<=4300)
    {
        var a=(pos-3800)/50.0 -10;
        $(".connect.three").css('transform','rotate('+a+'deg)');
    }
    if(pos>=5300 && pos<=5800)
    {
        var a=(pos-5300)/50.0 -10;
        $(".connect.four").css('transform','rotate('+a+'deg)');
    }
});

$(".circle").css("background-color", "white");
$(".circle.one").css("background-color", "rgb(1,1,1,0");
$(document).scroll(function(){
    var pos=$(document).scrollTop();
    if(pos>=0 && pos<=1000)
    {
        $(".circle").css("background-color", "white");
        $(".circle.one").css("background-color", "rgb(1,1,1,0)");
        
    }
    if(pos>=1001 && pos<=2500)
    {
        $(".circle").css("background-color", "white");
        $(".circle.two").css("background-color", "rgb(1,1,1,0)");
        
    }
    if(pos>=2501 && pos<=4000)
    {
        $(".circle").css("background-color", "white");
        $(".circle.three").css("background-color", "rgb(1,1,1,0)");
        
    }
    if(pos>=4001 && pos<=5500)
    {
        $(".circle").css("background-color", "white");
        $(".circle.four").css("background-color", "rgb(1,1,1,0)");
        
    }
    if(pos>=5501)
    {
        $(".circle").css("background-color", "white");
        $(".circle.five").css("background-color", "rgb(1,1,1,0)");
    }
});


$(".scrolltab").fadeIn();
$(document).scroll(function(){
    var pos=$(document).scrollTop();
    console.log("L:  "+pos);
    if(pos>=6500)
    {
        $(".scrolltab").hide();
    }
    if(pos<6500)
    {
        $(".scrolltab").fadeIn();
    }
});
$(".shadow").css("opacity", 0);
$(document).scroll(function(){
    var pos=$(document).scrollTop();
    if(pos>=0 && pos<=1500)
    {
        var s=pos/1500;
        $(".shadow").css("opacity", s);
    }
});



$(".circle").hover(function(key){
    console.log(key.type);
    if(key.type=='mouseenter')
    {
        $(key.target).css("height", "10px");
        $(key.target).css("width", "10px");
    }
    if(key.type=='mouseleave')
    {
        $(key.target).css("height", "7px");
        $(key.target).css("width", "7px");
    }
});


$(".circle.one").click(function(){
    $("html, body").animate({ scrollTop: "0" }, 1000);
});
$(".circle.two").click(function(){

    $("html, body").animate({ scrollTop: "1500" }, 1000);
});
$(".circle.three").click(function(){
    $("html, body").animate({ scrollTop: "3000" }, 1000);
});
$(".circle.four").click(function(){
    $("html, body").animate({ scrollTop: "4500" }, 1000);
});
$(".circle.five").click(function(){
    $("html, body").animate({ scrollTop: "6000" }, 1000);
});


