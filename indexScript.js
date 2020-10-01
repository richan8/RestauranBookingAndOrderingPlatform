$(document).keypress(function(e) {
    if(e.which == "96"){
        $(".console").toggleClass("consoleHidden");
        print("Console Toggled");
    }
});
$(document).ready(function(){
    $(".loadingPanel").addClass("textFadeIn");
    setTimeout(function(){
        $(".loadingPanel").addClass("loadingPanelHide");
    },2000);
    
    print=function(str)
    {
        $(".console").append("<div class='consoleLine'>"+str+"</div>");
        $(".console").scrollTop($(".console").prop("scrollHeight"));
    }
    
    var i=1;
    var active_slide=1;
    var s1h="Les Donnees";
    var s1t="The finest dining experience in all of manhattan - NY Times.";
    
    var s2h="View";
    var s2t="Dine with a panoramic view of the city.";
    
    var s3h="Book an experience";
    var s3t="Book a table and 3 course meal, have your meal served when you reach.";
    
    var s4h="Drinks on tap";
    var s4t="Enjoy our exquisite selection of fine brews from around the world.";
    
    var s5h="Exotic Cuisine";
    var s5t="Experience the true flavours of contemporary Indian culinary excellence.";
    
    $(".spotlightPanel").css("background-image","url(images/1.jpg)");
    function slider1()
    {
        $(".spotlightPanel").css("background-image","url(images/"+active_slide+".jpg)");
        active_slide=1;
        $(".spotlightHead").addClass("headChanging");
        $(".spotlightText").addClass("textChanging");
        setTimeout(function()
        {
            $(".spotlightHead").text(s1h);
            $(".spotlightText").text(s1t);
            $(".spotlightHead").removeClass("headChanging");
            $(".spotlightText").removeClass("textChanging");
        },600);
        
        $(".spotlightButton").removeClass("spotlightButtonCurrent");
        $("#sb1").addClass("spotlightButtonCurrent");
        temp=$(".spotlightImg");
        $("#si1").addClass("spotlightImg");
        $("#si1").removeClass("spotlightImgHidden");
        temp.removeClass("spotlightImg");
        temp.addClass("spotlightImgHidden");
    }
    function slider2()
    {
        $(".spotlightPanel").css("background-image","url(images/"+active_slide+".jpg)");
        active_slide=2;
        $(".spotlightHead").addClass("headChanging");
        $(".spotlightText").addClass("textChanging");
        setTimeout(function()
        {
            $(".spotlightHead").text(s2h);
            $(".spotlightText").text(s2t);
            $(".spotlightHead").removeClass("headChanging");
            $(".spotlightText").removeClass("textChanging");
            
        },600);
        $(".spotlightButton").removeClass("spotlightButtonCurrent");
        $("#sb2").addClass("spotlightButtonCurrent");
        temp=$(".spotlightImg");
        $("#si2").addClass("spotlightImg");
        $("#si2").removeClass("spotlightImgHidden");
        temp.removeClass("spotlightImg");
        temp.addClass("spotlightImgHidden");
    }
    function slider3()
    {
        $(".spotlightPanel").css("background-image","url(images/"+active_slide+".jpg)");
        active_slide=3;
        $(".spotlightHead").addClass("headChanging");
        $(".spotlightText").addClass("textChanging");
        setTimeout(function()
        {
            $(".spotlightHead").text(s3h);
            $(".spotlightText").text(s3t);
            $(".spotlightHead").removeClass("headChanging");
            $(".spotlightText").removeClass("textChanging");
            
        },600);
        $(".spotlightButton").removeClass("spotlightButtonCurrent");
        $("#sb3").addClass("spotlightButtonCurrent");
        temp=$(".spotlightImg");
        $("#si3").addClass("spotlightImg");
        $("#si3").removeClass("spotlightImgHidden");
        temp.removeClass("spotlightImg");
        temp.addClass("spotlightImgHidden");
    }
    function slider4()
    {
        $(".spotlightPanel").css("background-image","url(images/"+active_slide+".jpg)");
        active_slide=4;
        $(".spotlightHead").addClass("headChanging");
        $(".spotlightText").addClass("textChanging");
        setTimeout(function()
        {
            $(".spotlightHead").text(s4h);
            $(".spotlightText").text(s4t);
            $(".spotlightHead").removeClass("headChanging");
            $(".spotlightText").removeClass("textChanging");
            
        },600);
        $(".spotlightButton").removeClass("spotlightButtonCurrent");
        $("#sb4").addClass("spotlightButtonCurrent");
        temp=$(".spotlightImg");
        $("#si4").addClass("spotlightImg");
        $("#si4").removeClass("spotlightImgHidden");
        temp.removeClass("spotlightImg");
        temp.addClass("spotlightImgHidden");
    }
    function slider5()
    {
        $(".spotlightPanel").css("background-image","url(images/"+active_slide+".jpg)");
        active_slide=5;
        $(".spotlightHead").addClass("headChanging");
        $(".spotlightText").addClass("textChanging");
        setTimeout(function()
        {
            $(".spotlightHead").text(s5h);
            $(".spotlightText").text(s5t);
            $(".spotlightHead").removeClass("headChanging");
            $(".spotlightText").removeClass("textChanging");
            
        },600);
        $(".spotlightButton").removeClass("spotlightButtonCurrent");
        $("#sb5").addClass("spotlightButtonCurrent");
        temp=$(".spotlightImg");
        $("#si5").addClass("spotlightImg");
        $("#si5").removeClass("spotlightImgHidden");
        temp.removeClass("spotlightImg");
        temp.addClass("spotlightImgHidden");
    }
    
    $("#sb1").click(function(){slider1();});
    $("#sb2").click(function(){slider2();});
    $("#sb3").click(function(){slider3();});
    $("#sb4").click(function(){slider4();});
    $("#sb5").click(function(){slider5();});
    $(".spotlightButton").click(function(){i=999;});
    
    setInterval(function(){
        switch (i)
            {
                case 0:
                    slider1();
                    i++;
                    break;
                    
                case 1:
                    slider2();
                    i++;
                    break;
                    
                case 2:
                    slider3();
                    i++;
                    break;
                    
                case 3:
                    slider4();
                    i++;
                    break;
                    
                case 4:
                    slider5();
                    i=0;
                    break;
            }
    },6900);
    
    $(".spotlight_l").click(function(){
        i=999;//DISABLE AUTOSLIDE
        switch(active_slide)
        {
            case 1:
                slider5();
                i=5;
                break;
                
            case 2:
                slider1();
                i=1;
                break;
                
            case 3:
                slider2();
                i=2;
                break;
                
            case 4:
                slider3();
                i=3;
                break;
                
            case 5:
                slider4();
                i=4;
                break;
        }
    });
    $(".spotlight_r").click(function(){
        i=999;//DISABLE AUTOSLIDE
        switch(active_slide)
        {
            case 1:
                slider2();
                //i=2;
                break;
                
            case 2:
                slider3();
                //i=3;
                break;
                
            case 3:
                slider4();
                //i=4;
                break;
                
            case 4:
                slider5();
                //i=5;
                break;
                
            case 5:
                slider1();
                //i=1;
                break;
        }
    });
    
});