<html>
<head></head>
<body>
<?php
$q = $_GET['q'];
$tempStr="";
$bid="";
$date="";
$month="";
$hours="";
$minutes="";
$mobNo="";
$Oid="";
$i=1;
$itemNo=0;
$temp=0;
echo "<div class='consoleLine'>Request Successful.Value recieved by PHP : ".$q."</div>";

if(substr($q, 0, 1)=="1")
{
    echo "<div class='consoleLine'>bookingPHP function 1 is running.</div>";
    
    do
    {
        $tempStr=$tempStr.substr($q,$i,1);
        $i=$i+1;
    }while(substr($q, $i, 1)!="_");
    echo "<div class='consoleLine'>Checking for booking ID : ---";
    echo $tempStr;
    echo "---</div>";
    $con = mysqli_connect('localhost','1078104','12345678','1078104');
    if (!$con) {
        echo "<div class='consoleLine'>Could not connect to the server.</div>";
        die();
    }
    else{echo "<div class='consoleLine'>Connected.</div>";}
    $temp=0;
    $sql="SELECT * from booking where bid = '".$tempStr."'";
    echo "<div class='consoleLine'>Sending Query to Database</div>";
    $rTable = mysqli_query($con,$sql);
    while($row = mysqli_fetch_array($rTable))
    {
        $mobNo=$row['mobileNo'];
        echo"<div class='consoleLine'>Match Found</div>";
        $temp=$temp+1;
    }
    echo "<div class='consoleLine bookingIDMatch'>";
    if($temp>0){echo $temp;}
    echo "</div>";
    echo "<div class='consoleLine' id='fetchMobNo'>".$mobNo."</div>";
    echo "<div class='consoleLine status'>continue</div>";
}
   
if(substr($q, 0, 1)=="2")
{
    echo "<div class='consoleLine'>bookingPHP function 2 is running.</div>";
    $bid="";
    
    while(substr($q, $i, 1)!="_")
    {
        $mobNo=$mobNo.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>Mobile No. Parsed as : ".$mobNo."</div>";
    $i=$i+1;
    
    while(substr($q, $i, 1)!="_")
    {
        $Oid=$Oid.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>Order ID Parsed as : ".$Oid."</div>";
    $i=$i+1;
    
    
    while(substr($q, $i, 1)!="_")
    {
        $bid=$bid.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>Booking ID Parsed as : ".$bid."</div>";
    $i=$i+1;
    
    while(substr($q, $i, 1)!="_")
    {
        $date=$date.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>date Parsed as : ".$date."</div>";
    $i=$i+1;
    
    while(substr($q, $i, 1)!="_")
    {
        $month=$month.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>month Parsed as : ".$month."</div>";
    $i=$i+1;
    
    while(substr($q, $i, 1)!="_")
    {
        $hours=$hours.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>hours Parsed as : ".$hours."</div>";
    $i=$i+1;
    
    while(substr($q, $i, 1)!="_")
    {
        $minutes=$minutes.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>minutes Parsed as : ".$minutes."</div>";
    
    
    
    $con = mysqli_connect('localhost','1078104','12345678','1078104');
    if (!$con) {
        echo "<div class='consoleLine'>Could not connect to the server.</div>";
        die();
    }
    else{echo "<div class='consoleLine'>Connected.</div>";}
    
//INSERT INTO  `order` values('34',  '35',  '36',  '37', NULL ,'40');

//UPDATE `booking` SET orderID=8
//where `booking`.bid = '1if';

///UPDATE `order` 
///SET mobileNo=1231231
///where `order`.orderID=40;
    
    //Previous version queries
    /*
    $sql="INSERT INTO  `order` values('".$date."',  '".$month."',  '".$hours."',  '".$minutes."', NULL ,'".$Oid."');";
    $sql2="UPDATE `booking` SET orderID='".$Oid."' where `booking`.bid = '".$bid."';";
    $sql3="UPDATE `order` SET mobileNo=".$mobNo." where `order`.orderID='".$Oid."';";
    */
    
    
    $sql="INSERT INTO  `order` values('".$date."',  '".$month."',  '".$hours."',  '".$minutes."', '".$mobNo."' ,'".$Oid."');";
    $sql2="UPDATE `booking` SET orderID='".$Oid."' where `booking`.bid = '".$bid."';";
    
    
    echo "<div class='consoleLine'>Sending base Queries to Database</div>";
    $rTable = mysqli_query($con,$sql);
    $rTable = mysqli_query($con,$sql2);
    echo "<div class='consoleLine'>Sending Queries for each Item in the order</div>";
    $itemNo=0;
    do
    {
        $i=$i+1;
        if(substr($q,$i,1)=="e"){break;}
        $itemNo=$itemNo+1;
        $tempStr="";
        $tempStr=$tempStr.substr($q,$i,1);
        $i=$i+1;
        if((substr($q,$i,1)!="_")&&(substr($q,$i+1,1)!="e"))
        {
            $tempStr=$tempStr.substr($q,$i,1);
            $i=$i+1;
        }
        $temp=(int)$tempStr;
        if($temp>0)
        {
            echo "<div class='consoleLine'>Sending Query : Item ".$itemNo." -> ".$temp."</div>";
            $sql="INSERT INTO `orderItems` values('".$itemNo."','".$Oid."','".$temp."');";
            $rTable = mysqli_query($con,$sql);
        }
        
    }while(true);
    
    echo "<div class='consoleLine'>Queries sent Successfully</div>";
    echo "<div class='consoleLine status'>continue</div>";
}

    
if(substr($q, 0, 1)=="3")
{
    echo "<div class='consoleLine'>bookingPHP function 3 is running.</div>";
    $bid="";
    
    while(substr($q, $i, 1)!="_")
    {
        $mobNo=$mobNo.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>Mobile No. Parsed as : ".$mobNo."</div>";
    $i=$i+1;
    
    while(substr($q, $i, 1)!="_")
    {
        $Oid=$Oid.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>Order ID Parsed as : ".$Oid."</div>";
    $i=$i+1;
    
    
    while(substr($q, $i, 1)!="_")
    {
        $bid=$bid.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>Booking ID Parsed as : ".$bid."</div>";
    $i=$i+1;
    
    while(substr($q, $i, 1)!="_")
    {
        $date=$date.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>date Parsed as : ".$date."</div>";
    $i=$i+1;
    
    while(substr($q, $i, 1)!="_")
    {
        $month=$month.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>month Parsed as : ".$month."</div>";
    $i=$i+1;
    
    while(substr($q, $i, 1)!="_")
    {
        $hours=$hours.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>hours Parsed as : ".$hours."</div>";
    $i=$i+1;
    
    while(substr($q, $i, 1)!="_")
    {
        $minutes=$minutes.substr($q,$i,1);
        $i=$i+1;
    }
    echo "<div class='consoleLine'>minutes Parsed as : ".$minutes."</div>";
    
    $con = mysqli_connect('localhost','1078104','12345678','1078104');
    if (!$con) {
        echo "<div class='consoleLine'>Could not connect to the server.</div>";
        die();
    }
    else{echo "<div class='consoleLine'>Connected.</div>";}

//EXAMPLE QUERY :
//INSERT INTO  `order` values('34',  '35',  '36',  '37', NULL ,'40');

//UPDATE `booking` SET orderID=8
//where `booking`.bid = '1if';

///UPDATE `order` 
///SET mobileNo=1231231
///where `order`.orderID=40;
    
    
    $sql="INSERT INTO  `order` values('".$date."',  '".$month."',  '".$hours."',  '".$minutes."', '".$mobNo."' ,'".$Oid."');";
    
    echo "<div class='consoleLine'>Sending base Query to Database</div>";
    $rTable = mysqli_query($con,$sql);
    echo "<div class='consoleLine'>Sending Queries for each Item in the order</div>";
    $itemNo=0;
    do
    {
        $i=$i+1;
        if(substr($q,$i,1)=="e"){break;}
        $itemNo=$itemNo+1;
        $tempStr="";
        $tempStr=$tempStr.substr($q,$i,1);
        $i=$i+1;
        if((substr($q,$i,1)!="_")&&(substr($q,$i+1,1)!="e"))
        {
            $tempStr=$tempStr.substr($q,$i,1);
            $i=$i+1;
        }
        $temp=(int)$tempStr;
        if($temp>0)
        {
            echo "<div class='consoleLine'>Sending Query : Item ".$itemNo." -> ".$temp."</div>";
            $sql="INSERT INTO `orderItems` values('".$itemNo."','".$Oid."','".$temp."');";
            $rTable = mysqli_query($con,$sql);
        }
        
    }while(true);
    
    echo "<div class='consoleLine'>Queries sent Successfully</div>";
    echo "<div class='consoleLine status'>continue</div>";
}
?>    
</body> 
</html>