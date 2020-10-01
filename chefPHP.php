<html>
<head></head>
<body>
<?php
$q = $_GET['q'];
$sql="";
$temp=0;
$i=1;
echo "<div class='consoleLine'>Request Successful.</div>";
$con = mysqli_connect('localhost','1078104','12345678','1078104');
if (!$con) {
    echo "<div class='consoleLine'>Could not connect to the server.</div>";
    die();
}
else{echo "<div class='consoleLine'>Connected.</div>";}

$sql=$q;
echo "<div class='consoleLine'>Sending Query to Database</div>";
$rTable = mysqli_query($con,$sql);
while($row = mysqli_fetch_array($rTable))
{
    echo "<div class='consoleLine rItem'>
            <div class='rItemName'>".$row['items']."</div>
            <div class='rItemTime'>".$row['orderHour'].":".$row['orderMin']."</div>
            <div class='rItemQuantity'>".$row['quantity']."</div>
          </div>";
}
echo "<div class='consoleLine status'>continue</div>";
?>    
</body> 
</html>