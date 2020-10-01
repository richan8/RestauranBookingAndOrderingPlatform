$(document).keypress(function(e) {
    if(e.which == "96"){
        $(".console").toggleClass("consoleHidden");
        print("Console Toggled");
    }
});
$(document).ready(function(){
    var tableBooked=false;
    var tableBookingID=0;
    var checkForBooking=true;
    var debug=false;
    var orderArray= new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    var priceArray= new Array(0,150,120,160,140,180,120,200,80,130,35,45,55,25,450,480,400,450,540,280,340,390,120,135,180,140,80,120,200,140,160,150,100,170,120);
    var temp;
    var temp2;
    var temp3;
    var total=0;
    var id=0;
    var idStr;
    var tempStr;
    var tempName;
    var day=1;
    var month=1;
    var hours=1;
    var minutes=1;
    var sTime=1;
    var errors=0;
    var mobNo=0;
    var remainder=0;
    var hashString="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var Oid="";
    var checkForFinish=false;
    sendRequest=function(str)
    {
        if (window.XMLHttpRequest){xmlhttp = new XMLHttpRequest();} /*code for normal browsers (and latest IE)*/
        else {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");} /*code for IE5, IE6*/
        xmlhttp.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                var tempText = document.getElementById("terminal").innerHTML;
                document.getElementById("terminal").innerHTML= tempText+this.responseText;
            }
        };
        xmlhttp.open("GET","orderPHP.php?q="+str,true);
        xmlhttp.send();
        print("Sending XMLhttp request : "+str+" to PHP file.");
    }
    
    checkBookingId=function()
    {
        print("Checking Booking ID.");
        var tempStr="1";
        tempStr=tempStr+tableBookingID+"_";
        sendRequest(tempStr);
    }
    
    generateOrderID=function()
    {
        //////62-BIT ENCODING/////////
        tempStr=""+mobNo+day+month+hours+minutes;
        temp=parseInt(tempStr);
        print("tempString ready to be parsed : "+temp);
        while(temp!=0)
        {
            remainder=parseInt(temp%62);
            Oid=Oid+hashString.charAt(remainder);
            temp=parseInt(temp/62);
        }
        print("Encoding complete");
        print("Encoded OID = "+Oid);
        //////////////////////////////
    }
    
    
    sendMenuWithBooking = function()
    {
        mobNo=$("#fetchMobNo").text();
        print("Mobile number fetched : "+mobNo);
        print("calling generateOrder");
        generateOrderID();
        print("Encoding order with Booking id.");
        tempStr="2"+mobNo+"_"+Oid+"_"+tableBookingID+"_"+day+"_"+month+"_"+hours+"_"+minutes+"_";
        for(i=1;i<35;i++)
        {
            tempStr=tempStr+orderArray[i].toString()+"_";
        }
        tempStr=tempStr+"e";
        sendRequest(tempStr);
        checkForFinish=true;
    }
    sendMenuWithoutBooking = function()
    {
        mobNo=$("#mobNo").val();
        print("Mobile number fetched : "+mobNo);
        print("calling generateOrder");
        generateOrderID();
        print("Encoding order with Booking id.");
        tempStr="3"+mobNo+"_"+Oid+"_"+tableBookingID+"_"+day+"_"+month+"_"+hours+"_"+minutes+"_";
        for(i=1;i<35;i++)
        {
            tempStr=tempStr+orderArray[i].toString()+"_";
        }
        tempStr=tempStr+"e";
        sendRequest(tempStr);
        checkForFinish=true;
    }
    
    setInterval(function()
    {
        if(($(".status").text()=="continue")&&(checkForBooking))
        {
            $(".status").removeClass("status");
            checkForBooking=false;
            if($(".bookingIDMatch").text()=="1")
            {
                $("#popUp2").addClass("hide");
                $(".mainPanel").removeClass("inactiveToMouse");
                print("Menu now active to cursor");
            }
            else
            {
                print("Booking match not found");
                $("#popUp2").addClass("hide");
                $("#popUp3").removeClass("hide");
            }
            print("Status change processed");
        }
        if(($(".status").text()=="continue")&&(checkForFinish))
        {
            $(".status").removeClass("status");
            checkForBooking=false;
            $("#finishText").text("Your Order ID is : "+Oid);
            $("#popUp4").removeClass("hide");
        }
    },500);
    print=function(str)
    {
        $(".console").append("<div class='consoleLine'>"+str+"</div>");
        $(".console").scrollTop($(".console").prop("scrollHeight"));
    }
    $(".mainPanel").addClass("inactiveToMouse");
    print("Menu Inactive to cursor");
    $("#popUp1").removeClass("hide");
    $("#bookingNoButt").click(function(){
        $("#popUp1").addClass("hide");
        tableBooked=false;
        checkForBooking=false;
        tableBookingID=0;
        print("Booking set to False.");
        $(".mainPanel").removeClass("inactiveToMouse");
        print("Menu now active to cursor");
    });
    $("#bookingYesButt").click(function(){
        $("#popUp1").addClass("hide");
        $("#popUp2").removeClass("hide");
    });
    $("#bookingInputSubmitButt").click(function(){
        tableBooked=true;
        tableBookingID=$("#bookingInput").val();
        $("#popUp2").addClass("hide");
        print("Booking set to True");
        print("Booking id is "+tableBookingID);
        checkBookingId();
    });
    
    $(".item").click(function(){
        idStr=$(this).attr("id");
        id=10*parseInt(""+idStr.charAt(1))+parseInt(""+idStr.charAt(2));
        print("id : "+id+" selected.");
        total=total+priceArray[id];
        orderArray[id]=orderArray[id]+1;
        print("Order Array : "+orderArray);
        $(this).children().each(function(){
            if($(this).hasClass("iname"))
            {
                tempName=$(this).text();
            }
        });
        id=parseInt(id);
        if(id.toString().length==1)
        {
            id=0+id.toString();
        }
        temp="si"+id.toString();
        temp2="sc"+id.toString();
        temp3="sq"+id.toString();
        id=parseInt(id);
        if(orderArray[id]>1)
        {
            $("#"+temp3).text(parseInt($("#"+temp3).text())+1);
        }
        else
        {
            $(".orderList").animate({height:"+=51px"},500);
            tempStr="<div class='selItem' id='"+temp+"'><div class='iname'>"+tempName+"</div><div class='itemCancel' id='"+temp2+"'></div><div class='itemQty' id='"+temp3+"'>1</div></div>";
            $(".orderList").append(tempStr);
        }
        print("new total : "+total+".");
        $("#total").text("Total : "+total);
    });
    $(document).on("click",".itemCancel",function(){
        idStr=$(this).attr("id");
        id=10*parseInt(""+idStr.charAt(2))+parseInt(""+idStr.charAt(3));
        print("id selected : "+id);
        idStr=id.toString();
        if(idStr.length==1){idStr=0+idStr;}
        id=parseInt(id);
        orderArray[id]=orderArray[id]-1;
        if(orderArray[id]==0)
        {
            temp="#si"+idStr;
            $(temp).addClass("hideVertical");
            $(".orderList").animate({height:"-=51px"},200);
            setTimeout(function(){
                $(temp).remove();
            },500);
        }
        else
        {
            temp3="sq"+idStr;
            $("#"+temp3).text(parseInt($("#"+temp3).text())-1);
        }
        total=total-priceArray[id];
        $("#total").text("Total : "+total);
        print("Order Array : "+orderArray);
    });
    
    $("#sub").click(function(){
        print("Submit Button function fired.")
        var currentTime=new Date();
        var requestMins;
        var tempString;
        errors=0;
        $(".error").remove();
        day=$("#day").val();
        month=$("#month").val();
        hours=$("#hours").val();
        minutes=$("#minutes").val();
        sTime=parseInt(parseInt(hours*60)+parseInt(minutes));
        print("Input Date-Time : "+day+"/"+month+" "+hours+" hours, "+minutes+" minutes.");
        /*----ERROR CHECKING----*/
        if(day==""||month==""||hours==""||minutes=="")
        {
            errors++;
            $(".errorBox").prepend('<div class="error">Please enter all fields</div>');
        }
        if(day<0||month<0||hours<0||minutes<0)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">Please enter a positive time.</div>');
        }
        if((month==1||month==3||month==5||month==7||month==8||month==10||month==12)&&day>31)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">This date does is not valid in the given month</div>');
        }
        if((month==4||month==6||month==9||month==11)&&day>30)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">This date does is not valid in the given month</div>');
        }
        if(month>12)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">Please enter a valid month</div>');
        }
        if(day>31)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">Please enter a valid day</div>');
        }
        if(hours>24)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">Please enter a valid time in hours</div>');
        }
        if(minutes>59)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">Please enter a valid time in minutes</div>');
        }
        if(month==2&&day>30)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">This date does is not valid in the given month</div>');
        }
        if(hours<9)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">The resaurant does not open before 9 in the morning.</div>');
        }
        if(hours>22)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">The resaurant does not take orders for after 11pm.</div>');
        }
        if(total==0)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">The order is empty.</div>');
        }
        if((currentTime.getDate()==day&&currentTime.getMonth()==(month-1))&&(hours<currentTime.getHours()))
        {
            errors++;
            $(".errorBox").prepend('<div class="error">Please check the given time in hours.</div>');
        }
        if((currentTime.getDate()==day&&currentTime.getMonth()==(month-1))&&(hours==currentTime.getHours())&&(minutes<currentTime.getMinutes()))
        {
            errors++;
            $(".errorBox").prepend('<div class="error">Please check the given time in minutes.</div>');
        }
        if((currentTime.getDate()>day&&currentTime.getMonth()==(month-1))||(currentTime.getMonth()>(month-1)))
        {
            errors++;
            $(".errorBox").prepend('<div class="error">Please check the booking date</div>');
        }
        
        /*---ERROR CHECKING COMPLETE---*/
        if(errors>0)
        {
            print("Date-Time submission has errors.");
            $(".errorBox").removeClass("hide");
            $(".errorBox").addClass("show");
            print("Submission error log displayed to user.");
        }
        else
        {
            print("Valid Input.");
            $(".mainPanel").addClass("inactiveToMouse");
            if(tableBooked){$("#paymentGateway1").removeClass("pgHide");}
            else{$("#paymentGateway2").removeClass("pgHide");}
        }
    });
    $(".closeButton").click(function(){
        $(".errorBox").removeClass("show");
        $(".errorBox").addClass("hide");
    });
    $("#paymentCancelButton1").click(function(){
        $("#paymentGateway1").addClass("pgHide");
    });
    $("#paymentCancelButton2").click(function(){
        $("#paymentGateway2").addClass("pgHide");
    });
    $("#paymentConfirmButton1").click(function()
    {
        sendMenuWithBooking();
        $("#paymentGateway1").addClass("pgHide");
    });
    $("#paymentConfirmButton2").click(function()
    {
        sendMenuWithoutBooking();
        $("#paymentGateway2").addClass("pgHide");
    });
});