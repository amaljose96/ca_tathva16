<?php
$pass=$_POST['KEY'];
if($pass!=' Thought you were smart. Did you? B)'){
  exit("<script>alert('Dont wander away to prohibited region.');window.location.href='http://tathva.org';</script>");
}
$sql="SELECT ID,Name,College,Phone FROM RECORDS";
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
    echo "<div class='contact_row'>";
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
        echo "<div class='contact_block  form_row' onclick='load_panel(".$row['ID'].")'>
          <div class='contact_name'>".$row['Name']."</div>
          <div class='contact_college'>".$row['College']."</div>
          <div class='contact_number'>".$row['Phone']."</div>
        </div>";
  }
}
echo "</div>";
 ?>
