<html>
<head>
</head>
<body>
<?php
$q = $_GET['q'];
//$q ="";
//$q=$p;
if(substr($q, 0, 1)=="-")
{   
    $day =0;
    $month=0;
    $bstart=0;
    $bend=0;
    echo "<div class='consoleLine'>XML Request successfully recieved by PHP</div>";
    echo "<div class='consoleLine'>Value recieved : ".$q."</div>";
    echo "<div class='consoleLine'>Parsing the data to send to database</div>";
    
    /*-------PARSING ALGORITHM-------*/
    $i=1;
    $j=1;
    $tempStr="";
    while(substr($q, $i, 1)!="-")
    {
        $tempStr=$tempStr.substr($q,$i,1);
        $i=$i+1;
    }
    $day = (int)$tempStr;
    echo "<div class='consoleLine'>Day : ".$day."</div>";
    
    $i=$i+1;
    $tempStr="";
    while(substr($q, $i, 1)!="-")
    {
        $tempStr=$tempStr.substr($q,$i,1);
        $i=$i+1;
    }
    $month = (int)$tempStr;
    echo "<div class='consoleLine'>Month : ".$month."</div>";
    
    $i=$i+1;
    $tempStr="";
    while(substr($q, $i, 1)!="-")
    {
        $tempStr=$tempStr.substr($q,$i,1);
        $i=$i+1;
    }
    $bstart = (int)$tempStr;
    echo "<div class='consoleLine'>bStart in minutes : ".$bstart."</div>";
    
    $i=$i+1;
    $tempStr="";
    while(substr($q, $i, 1)!="-")
    {
        $tempStr=$tempStr.substr($q,$i,1);
        $i=$i+1;
    }
    $bend = (int)$tempStr;
    echo "<div class='consoleLine'>bEnd in minutes : ".$bend."</div>";
    
    /*----------------------------*/
    
    echo "<div class='consoleLine'>Parsing Complete.</div>";
    echo "<div class='consoleLine'>Connecting to the Database Server.</div>";
    
    $con = mysqli_connect('localhost','1078104','12345678','1078104');
    if (!$con) {
        echo "<div class='consoleLine'>Could not connect to the server.</div>";
        die();
    }
    else{echo "<div class='consoleLine'>Connected.</div>";}
    
    $sql="SELECT tid FROM booking Natural Join bookedTables Where ((('".$bstart."' between bStart AND bEnd) 
        OR ('".$bend."' between bStart AND bEnd) 
        OR (('".$bstart."' < bStart) AND ('".$bend."' > bEnd))
        OR (('".$bstart."' > bStart) AND ('".$bend."' < bEnd))
            )AND(('".$day."' = date) AND ('".$month."' = month)))";
    
    echo "<div class='consoleLine'>Sending Query to Database</div>";
    $rTable = mysqli_query($con,$sql);
    
    $bitArray=array("1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1");
    echo "<div class='consoleLine'>Finding Unavailable Table IDs</div>";
    echo "<div class='consoleLine'>Encoding bit string</div>";
    while($row = mysqli_fetch_array($rTable))
    {
        $bitArray[$row['tid']]=0;
         echo "<div class='consoleLine'>While loop running</div>";
    }
    $i=0;
    echo "<div class='consoleLine'>Bit String :</div>";
    echo "<div class='consoleLine bitString'>";
    for($i=0;$i<24;$i++)
    {
        echo $bitArray[$i];
    }
    echo "</div>";
    echo "<div class='consoleLine'>AJAX Status Change :</div>";
    echo "<div class='consoleLine status'>continue</div>";
}
if(substr($q, 0, 1)=="_")
{
    $day =0;
    $month=0;
    $bstart=0;
    $bend=0;
    $t_id=0;
    $mob_no="";
    $b_id;
    echo "<div class='consoleLine'>XML Request successfully recieved by PHP</div>";
    echo "<div class='consoleLine'>Value recieved : ".$q."</div>";
    echo "<div class='consoleLine'>Parsing the data to send to database</div>";
    /*-------PARSING ALGORITHM-------*/
    $i=0;
    echo "<div class='consoleLine'>Connecting to the Database Server.</div>";
    
    $con = mysqli_connect('localhost','1078104','12345678','1078104');
    if (!$con) {
        echo "<div class='consoleLine'>Could not connect to the server.</div>";
        die();
    }
    else{echo "<div class='consoleLine'>Connected.</div>";}
    
    do
    {
        echo "<div class='consoleLine'>Parsing New Tuple.</div>";
        $tempStr="";
        $i=$i+2;
        while(substr($q, $i, 1)!="-")
        {
            $tempStr=$tempStr.substr($q,$i,1);
            $i=$i+1;
        }
        $day = (int)$tempStr;
        echo "<div class='consoleLine'>Day : ".$day."</div>";
        
        $i=$i+1;
        $tempStr="";
        while(substr($q, $i, 1)!="-")
        {
            $tempStr=$tempStr.substr($q,$i,1);
            $i=$i+1;
        }
        $month = (int)$tempStr;
        echo "<div class='consoleLine'>Month : ".$month."</div>";
        
        $i=$i+1;
        $tempStr="";
        while(substr($q, $i, 1)!="-")
        {
            $tempStr=$tempStr.substr($q,$i,1);
            $i=$i+1;
        }
        $bstart = (int)$tempStr;
        echo "<div class='consoleLine'>bStart in minutes : ".$bstart."</div>";
        
        $i=$i+1;
        $tempStr="";
        while(substr($q, $i, 1)!="-")
        {
            $tempStr=$tempStr.substr($q,$i,1);
            $i=$i+1;
        }
        $bend = (int)$tempStr;
        echo "<div class='consoleLine'>bEnd in minutes : ".$bend."</div>";
        
        $i=$i+1;
        $tempStr="";
        while(substr($q, $i, 1)!="-")
        {
            $tempStr=$tempStr.substr($q,$i,1);
            $i=$i+1;
        }
        $t_id = (int)$tempStr;
        echo "<div class='consoleLine'>t_id : ".$t_id."</div>";
        
        $i=$i+1;
        $tempStr="";
        while(substr($q, $i, 1)!="-")
        {
            $tempStr=$tempStr.substr($q,$i,1);
            $i=$i+1;
        }
        $mob_no = $tempStr;
        echo "<div class='consoleLine'>Mobile Number : ".$mob_no."</div>";
        echo "<div class='consoleLine'>tempStr : ".$tempStr."</div>";
        
        $i=$i+1;
        $tempStr="";
        while(substr($q, $i, 1)!="-")
        {
            $tempStr=$tempStr.substr($q,$i,1);
            $i=$i+1;
        }
        $b_id = $tempStr;
        echo "<div class='consoleLine'>b_id : ".$b_id."</div>";
        echo "<div class='consoleLine'>Tuple Parsing Complete.</div>";
        $i=$i+1;
        $sql="INSERT INTO bookedTables VALUES('".$t_id."','".$b_id."')";
        echo "<div class='consoleLine'>Sending Query to Database bookedTables Table</div>";
        $rTable = mysqli_query($con,$sql);
    }while(substr($q, $i, 1)=="_");
    
    echo "<div class='consoleLine'>Sending Query to Database booking Table</div>";
    $sql="INSERT INTO booking VALUES('".$bstart."','".$bend."','".$b_id."','".$mob_no."','".$day."','".$month."',NULL)";
    $rTable = mysqli_query($con,$sql);
    
    echo "<div class='consoleLine'>AJAX Status Change :</div>";
    echo "<div class='consoleLine status'>continue</div> <div class='consoleLine bookingComplete'>done</div>";
}
?>
</body>
</html>
