<?php
$v1=$_POST['1'];
$v2=$_POST['2'];
$v3=$_POST['3'];
$v4=$_POST['4'];
$v5=$_POST['5'];
$v6=$_POST['6'];
$v7=$_POST['7'];
$v8=$_POST['8'];
$v9=$_POST['9'];
$v10=$_POST['10'];
$v11=$_POST['11'];
$v12=$_POST['12'];
$v13=$_POST['13'];
$v14=$_POST['14'];
$v15=$_POST['15'];
$v16=$_POST['16'];
$v17=$_POST['17'];
$sql="INSERT INTO RECORDS VALUES('$v1','$v2','$v3','$v4','$v5','$v6','$v7','$v8','$v9','$v10','$v11','$v12','$v13','$v14','$v15','$v16','$v17','".date("Y/m/d h:i:sa")."');";
$servername="localhost";
$username = "nitcfest_clue16";
$password='Amaljose@96';
$database= "nitcfest_sap16";
// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error)
{
   die("Connection failed: " . $conn->connect_error);
}
$result = $conn->query($sql);
$conn->close();
 ?>
