$(document).keypress(function(e) {
    if(e.which == "96"){
        $(".console").toggleClass("consoleHidden");
        print("Console Toggled");
    }
});
$(document).ready(function(){
    var i=0;
    var tempObj;
    var currentTime=0;
    var currentHours=0;
    var currentMinutes=0;
    var currentSeconds=0;
    var selDate=0;
    var selMonth=0;
    var sqlStr=""
    var tempName="";
    var tempTime="";
    var tempQuantity="";
    var tempString="";
    print=function(str)
    {
        $(".console").append("<div class='consoleLine'>"+str+"</div>");
        $(".console").scrollTop($(".console").prop("scrollHeight"));
    }
    $("#errorClose").click(function(){$(".errorBox").addClass("hide");});
    setTime=function()
    {
        currentTime=new Date();
        currentHours=currentTime.getHours();
        currentMinutes=currentTime.getMinutes();
        currentSeconds=currentTime.getSeconds();
        $(".timer").text(currentHours+":"+currentMinutes+":"+currentSeconds);
    }
    setInterval(function(){
        setTime();
    },1000);
    setInterval(function(){
        if($(".status").text()=="continue")
        {
            print("Updating table");
            $(".status").removeClass("status");
            i=0;
            $(".item").remove();
            $(".rItem").each(function(){
                i++;
                print("inserting Item "+i);
                $tempObj=$(this);
                tempName=$tempObj.children(".rItemName").text();
                tempTime=$tempObj.children(".rItemTime").text();
                tempQuantity=$tempObj.children(".rItemQuantity").text();
                $(this).children(function(){
                    if($(this).hasClass("rItemName")){tempName=$(this).val();}
                    if($(this).hasClass("rItemTime")){tempTime=$(this).val();}
                    if($(this).hasClass("rItemQuantity")){tempQuantity=$(this).val();}
                    print(tempName + "-" + tempTime +"-" + tempQuantity);
                });
                tempString="<div class='item'><div class='iname'>"+tempName+"</div><div class='iTime'>"+tempTime+"</div><div class='iQty'>"+tempQuantity+"</div></div>";
                $(".itemPanel").append(tempString);
            });
            $(".rItem").removeClass("rItem");
        }
    },10);
    setInterval(function()
    {
        checkDate();
    },5000);
    setInterval(function(){
        $(".console").empty();
        print("Console Emptied.")
    },30000);
    sendRequest=function(str)
    {
        if (window.XMLHttpRequest){xmlhttp = new XMLHttpRequest();}
        else {xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
        xmlhttp.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                var tempText = document.getElementById("terminal").innerHTML;
                document.getElementById("terminal").innerHTML= tempText+this.responseText;
            }
        };
        xmlhttp.open("GET","chefPHP.php?q="+str,true);
        xmlhttp.send();
        print("Sending XMLhttp request to PHP file.");
    }
    checkDate=function(){
        print("Checking orders for "+selDate+"/"+selMonth);
        
        //Example Query 
        /*
        SELECT items, quantity, orderHour, orderMin
        FROM  `order` 
        NATURAL JOIN  `orderItems` 
        NATURAL JOIN  `menu` 
        WHERE orderDate =12
        AND orderMonth =12
        ORDER BY orderHour, orderMin
        */
        sqlStr="SELECT items, quantity, orderHour, orderMin FROM  `order` NATURAL JOIN  `orderItems` NATURAL JOIN  `menu` WHERE orderDate = "+selDate+" AND orderMonth ="+selMonth+" ORDER BY orderHour, orderMin;";
        sendRequest(sqlStr);
    }
    $(".dateSub").click(function(){
        selDate=$("#dateIn").val();
        selMonth=$("#monthIn").val();
        print("date selected : "+selDate+"/"+selMonth);
        checkDate();
    });
    setTime();
    selDate=currentTime.getDate();
    selMonth=currentTime.getMonth()+1;
    checkDate();
    $(document).on("click",".dateSub",function(){
        //$(".item").remove();
    });
});