$(document).keypress(function(e) {
  if(e.which == "96") {
      $(".console").toggleClass("consoleHidden");
      print("Console Toggled");
  }
  if(e.which == "48") {
      print("Console Toggled");
  }
});
$(document).ready(function(){
    var price=0;
    print=function(str)
    {
        $(".console").append("<div class='consoleLine'>"+str+"</div>");
        $(".console").scrollTop($(".console").prop("scrollHeight"));
    }
    
    setTable = function()
    {
        price=0;
        var bitString="";
        var i=0;
        var tableID="";
        bitString=$(".bitString").text();
        for(i=0;i<24;i++)
        {
            tableID="#t"+(i+1);
            if(bitString.charAt(i)=="0")
            {
                if($(tableID).hasClass("a_available")){$(tableID).removeClass("a_available");$(tableID).addClass("a_unavailable");}
                if($(tableID).hasClass("a_selected")){$(tableID).removeClass("a_selected");$(tableID).addClass("a_unavailable");}
                if($(tableID).hasClass("b_available")){$(tableID).removeClass("b_available");$(tableID).addClass("b_unavailable");}
                if($(tableID).hasClass("b_selected")){$(tableID).removeClass("b_selected");$(tableID).addClass("b_unavailable");}
                if($(tableID).hasClass("c_available")){$(tableID).removeClass("c_available");$(tableID).addClass("c_unavailable");}
                if($(tableID).hasClass("c_selected")){$(tableID).removeClass("c_selected");$(tableID).addClass("c_unavailable");}
                if($(tableID).hasClass("d_available")){$(tableID).removeClass("d_available");$(tableID).addClass("d_unavailable");}
                if($(tableID).hasClass("d_selected")){$(tableID).removeClass("d_selected");$(tableID).addClass("d_unavailable");}
                if($(tableID).hasClass("p_available")){$(tableID).removeClass("p_available");$(tableID).addClass("p_unavailable");}
                if($(tableID).hasClass("p_selected")){$(tableID).removeClass("p_selected");$(tableID).addClass("p_unavailable");}
                if($(tableID).hasClass("sp_available")){$(tableID).removeClass("sp_available");$(tableID).addClass("sp_unavailable");}
                if($(tableID).hasClass("sp_selected")){$(tableID).removeClass("sp_selected");$(tableID).addClass("sp_unavailable");}
            }
            if(bitString.charAt(i)=="1")
            {
                if($(tableID).hasClass("a_unavailable")){$(tableID).removeClass("a_unavailable");$(tableID).addClass("a_available");}
                if($(tableID).hasClass("a_selected")){$(tableID).removeClass("a_selected");$(tableID).addClass("a_available");}
                if($(tableID).hasClass("b_unavailable")){$(tableID).removeClass("b_unavailable");$(tableID).addClass("b_available");}
                if($(tableID).hasClass("b_selected")){$(tableID).removeClass("b_selected");$(tableID).addClass("b_available");}
                if($(tableID).hasClass("c_unavailable")){$(tableID).removeClass("c_unavailable");$(tableID).addClass("c_available");}
                if($(tableID).hasClass("c_selected")){$(tableID).removeClass("c_selected");$(tableID).addClass("c_available");}
                if($(tableID).hasClass("d_unavailable")){$(tableID).removeClass("d_unavailable");$(tableID).addClass("d_available");}
                if($(tableID).hasClass("d_selected")){$(tableID).removeClass("d_selected");$(tableID).addClass("d_available");}
                if($(tableID).hasClass("p_unavailable")){$(tableID).removeClass("p_unavailable");$(tableID).addClass("p_available");}
                if($(tableID).hasClass("p_selected")){$(tableID).removeClass("p_selected");$(tableID).addClass("p_available");}
                if($(tableID).hasClass("sp_unavailable")){$(tableID).removeClass("sp_unavailable");$(tableID).addClass("sp_available");}
                if($(tableID).hasClass("sp_selected")){$(tableID).removeClass("sp_selected");$(tableID).addClass("sp_available");}
            }
        }
        $(".bitString").removeClass("bitString");
    }
    
    $(".table").click(function(){
        if($(this).hasClass("a_available"))
        {
            $(this).removeClass("a_available");
            $(this).addClass("a_selected");
            $(this).addClass("selTable");
            price=price+500;
        }
        else if($(this).hasClass("a_selected"))
        {
            $(this).removeClass("a_selected");
            $(this).addClass("a_available");
            $(this).removeClass("selTable");
            price=price-500;
        }
        if($(this).hasClass("b_available"))
        {
            $(this).removeClass("b_available");
            $(this).addClass("b_selected");
            $(this).addClass("selTable");
            price=price+500;
        }
        else if($(this).hasClass("b_selected"))
        {
            $(this).removeClass("b_selected");
            $(this).addClass("b_available");
            $(this).removeClass("selTable");
            price=price-500;
        }
        if($(this).hasClass("c_available"))
        {
            $(this).removeClass("c_available");
            $(this).addClass("c_selected");
            $(this).addClass("selTable");
            price=price+500;
        }
        else if($(this).hasClass("c_selected"))
        {
            $(this).removeClass("c_selected");
            $(this).addClass("c_available");
            $(this).removeClass("selTable");
            price=price-500;
        }
        if($(this).hasClass("d_available"))
        {
            $(this).removeClass("d_available");
            $(this).addClass("d_selected");
            $(this).addClass("selTable");
            price=price+500;
        }
        else if($(this).hasClass("d_selected"))
        {
            $(this).removeClass("d_selected");
            $(this).addClass("d_available");
            $(this).removeClass("selTable");
            price=price-500;
        }
        if($(this).hasClass("p_available"))
        {
            $(this).removeClass("p_available");
            $(this).addClass("p_selected");
            $(this).addClass("selTable");
            price=price+500;
        }
        else if($(this).hasClass("p_selected"))
        {
            $(this).removeClass("p_selected");
            $(this).addClass("p_available");
            $(this).removeClass("selTable");
            price=price-500;
        }
        if($(this).hasClass("sp_available"))
        {
            $(this).removeClass("sp_available");
            $(this).addClass("sp_selected");
            $(this).addClass("selTable");
            price=price+500;
        }
        else if($(this).hasClass("sp_selected"))
        {
            $(this).removeClass("sp_selected");
            $(this).addClass("sp_available");
            $(this).removeClass("selTable");
            price=price-500;
        }
        
    });
    
setInterval(function()
    {
        if($(".status").text()=="continue")
        {
            $(".status").removeClass("status");
            setTable();
            $(".selectTableText").removeClass("show");
            $(".selectTableText").addClass("hide");
            print("-Status change processed-");
        }
        if($(".bookingComplete").text()=="done")
        {
            $(".bookingComplete").removeClass("bookingComplete");
            $(".bidDisplay").removeClass("hide");
        }
    },500);
    
    
    //submitTable=function(str)
    //{ 
    //    if (window.XMLHttpRequest){xmlhttp = new XMLHttpRequest();} /*code for normal browsers (and latest IE)*/
    //    else {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");} /*code for IE5, IE6*/
    //    xmlhttp.onreadystatechange = function() 
    //    {
    //        if (this.readyState == 4 && this.status == 200) 
    //        {
    //            var tempText = document.getElementById("terminal").innerHTML;
    //            document.getElementById("terminal").innerHTML= tempText+this.responseText;
    //        }
    //    };
    //    xmlhttp.open("GET","bookTable.php?q="+str,true);
    //    xmlhttp.send();
    //    print("Sending XMLhttp request to PHP file.");
    //}
    
    submitTime=function(str)
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
        xmlhttp.open("GET","booking.php?q="+str,true);
        xmlhttp.send();
        print("Sending XMLhttp request to PHP file.");
    }
    
    setTable();
    var day=1;
    var month=1;
    var hours=1;
    var minutes=1;
    var duration=1;
    var errors=0;
    var sTime=0;
    var eTime=0;
    $(".priceDiv").addClass("priceHide");
    $(".selectTableText").text("SELECT BOOKING TIMING");
    $(".selectTableText").addClass("show");
    
    $("#sub").click(function(){
        var currentTime=new Date();
        var requestMins;
        var tempString;
        errors=0;
        $(".error").remove();
        day=$("#day").val();
        month=$("#month").val();
        hours=$("#hours").val();
        minutes=$("#minutes").val();
        duration=$("#duration").val();
        sTime=parseInt(parseInt(hours*60)+parseInt(minutes));
        eTime=parseInt(parseInt(hours*60)+parseInt(minutes)+parseInt(duration));     
        /*----ERROR CHECKING----*/
        if(day==""||month==""||hours==""||minutes==""||duration=="")
        {
            errors++;
            $(".errorBox").prepend('<div class="error">Please check the entered numeric values</div>');
        }
        if(duration<15||duration>600)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">The Duration of booking must be between 15 and 600 minutes</div>');
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
            $(".errorBox").prepend('<div class="error">The resaurant does not open before 9 in the morning. Please select a slot after this time</div>');
        }
        if(eTime>=1440)
        {
            errors++;
            $(".errorBox").prepend('<div class="error">The resaurant closes at 24:00 midnight. Please select a slot before this time.</div>');
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
            print("Booking Date-Time submission has errors.");
            $(".errorBox").removeClass("hide");
            $(".errorBox").addClass("show");
            print("Submission error log displayed to user.");
        }
        else
        {
            print("Submission successful.");
            tempString = "-"+day+"-"+month+"-"+sTime+"-"+eTime+"-";
            print("generated Request string successfully.");
            print("String generated for XML Request : "+tempString);
            $(".selectTableText").removeClass("hide");
            $(".selectTableText").addClass("show");
            $(".selectTableText").text("Please Wait");
            submitTime(tempString);
            $(".priceDiv").removeClass("priceHide");
        }
    });    
    
    
    $("#finalize").click(function(){
        $("#refundText").text("The booking charge of "+price+" will be refunded on check-in.");
        if($(".selTable").length>0)
        {
            $(".paymentGateway").removeClass("hide");
        }
    });
    
    $("#paymentCancelButton").click(function(){
        $(".paymentGateway").addClass("hide");
    });
    $("#paymentConfirmButton").click(function(){
        var errors=0;
        if($("#pgMob").val()=="")
        {
            errors++;
            print("error reading Mobile number value.");
        }
        if($("#pgCard").val()=="")
        {
            print("error reading Mobile number value.");
            errors++;
        }
        if(errors==0)
        {
            print("Payment Confirmed");
            var temp="";
            var temp_int=0;
            var remainder=0;
            var b_id="";
            var t_id="";
            var tupleString="";
            var bid_bstart=0;
            var hashString="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            ////BID ENCODING ALGORITHM////
            ///BID = t_id+bstart(first 3 digits)+date+month
            var bid_table=$(".selTable").first();
            if($(bid_table).attr("id").length==2){t_id=""+$(bid_table).attr("id").charAt(1);}
            else if($(bid_table).attr("id").length==3){t_id=""+$(bid_table).attr("id").charAt(1)+$(bid_table).attr("id").charAt(2)}
            t_id=parseInt(t_id)-1;
            print("Table selected for BID : "+t_id);
            bid_bstart=parseInt(sTime/10);            
            temp=t_id.toString()+bid_bstart.toString()+day+month;
            print("Unencoded BID = "+temp);
            print("Encoding BID using 62 Bit Encoding.");
            //////62-BIT ENCODING/////////
            temp_int=parseInt(temp);
            while(temp_int!=0)
            {
                remainder=parseInt(temp_int%62);
                b_id=b_id+hashString.charAt(remainder);
                temp_int=parseInt(temp_int/62);
            }
            print("Encoding complete");
            print("Encoded BID = "+b_id);
            $(".bookingIDBox").text("Your Booking ID is : "+b_id);
            //////////////////////////////
            $(".selTable").each(function(){
                if($(this).attr("id").length==2){t_id=""+$(this).attr("id").charAt(1);}
                else if($(this).attr("id").length==3){t_id=""+$(this).attr("id").charAt(1)+$(this).attr("id").charAt(2)}
                t_id=parseInt(t_id)-1;
                print("Table selected : "+t_id);
                tempString = "-"+day+"-"+month+"-"+sTime+"-"+eTime+"-"+t_id+"-"+($("#pgMob").val())+"-"+b_id+"-";
                tupleString=tupleString+"_"+tempString;
            });
            tupleString=tupleString+"END";
            print("Tuple String = "+tupleString);
            submitTime(tupleString);
            $(".paymentGateway").addClass("hide");
            $(".selectTableText").removeClass("hide");
            $(".selectTableText").addClass("show");
            $(".selectTableText").text("Please Wait");
        }
    });
    
    $(".closeButton").click(function(){
        $(".errorBox").removeClass("show");
        $(".errorBox").addClass("hide");
    });
    
    
    
    
    
    print("HTML Successfully Loaded");
});


/*
OH SWEET GODS OF jQuery
A prayer to the supreme power before the start of any Javascript-PHP project.


Oh sweet gods of jquery
let us pass through the
lands of javascript,
into the Abyss that is PHP.
We shall go in with
our heads held high
and our noble hearts
as our SQL banners fly.
To initialise the database,
the only database,
that can ensure that one day
online restaurant management
may be seen by
the entire kingdom at bay.

Oh sweet lords of jquery
Give us the strength of the DOM.
allow us,
connection with freevar servers at morn.
show us the ultimate path to lady luck,
but PHP she does rarely adorn.
for luck is something,
we may require
when our keywords stop
being color-coded sapphire
That is when
the hopes dim,
that is where the lines of php begin.

Oh sweet heavens of the js
Allow us entry to the RDB Hive
as songs of our php echo through
the lines of our HTML5.
With the sweat of our fingers,
as the site goes live.
deep in the perilous backend,
we fearlessly dive.
The food, the orders,
the tables we class.
Projections and tuples,
and cells we amass.


Oh great supremes of jQuery
let the light shine upon our code.
let the horses of the php neigh,
let the firefox run in online mode,
let the server request fly high.
Through the data seas,
shall streak through,
our queries.
Searching for the tuples,
projections, creating bitstrings.
Oh dear great merciful gods,
help us become, the PHP 
and javascript kings.

An impromptu poem by Richanshu Jha written when the first line of jQuery was initialised. Needless to say, A large amount of coffee was ingested before the creation of this piece.
*/
