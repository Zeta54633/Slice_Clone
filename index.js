
$(document).scroll(function(){
    var pos=$(document).scrollTop();
    console.log(pos);
    
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
});

