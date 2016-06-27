<?php
$id=$_POST['ID'];
$sql="SELECT * FROM RECORDS WHERE ID=".$id;
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

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
      echo "<div class='form_row'>
        <div class='label'>Name</div>
        <div class='text_input'>".$row['Name']."</div>
      </div>";
      echo "<div class='form_row'>
        <div class='label'>College</div>
        <div class='text_input' >".$row['College']."</div>
      </div>";
      echo "<div class='form_row'>
        <div class='label'>Year</div>
        <div class='text_input' >".$row['BTech/Architecture'].", Year ".$row['Year']."</div>
      </div>";
      if($row['Email']!=''){
      echo "<div class='form_row'>
        <div class='label'>Email Id:</div>
        <div class='text_input' >".$row['Email']."</div>
      </div>";
    }
    if($row['FB']!=''){
      echo "<div class='form_row'>
        <div class='label'>Facebook Profile link:</div>
        <div class='text_input' >".$row['FB']."</div>
      </div>";
    }
      echo "<div class='form_row'>
        <div class='label'>Phone number:</div>
        <div class='text_input' id='phone' >".$row['Phone']."</div>
      </div>";
    if($row['WhatsApp']!=''){
      echo "<div class='form_row'>
        <div class='label'>Whatsapp number:</div>
        <div class='text_input' id='whatsapp' >".$row['WhatsApp']."</div>
      </div>";
    }
    if($row['Address']!=''){
      echo "<div class='form_row'>
        <div class='label'>Address:</div>
        <div class='text_input' id='address' >".$row['Address']."</div>
      </div>";
    }
    if($row['Techfest']!=''){
      echo "<div class='form_row'>
        <div class='label'>Name of technical fest of college:</div>
        <div class='text_input' id='techfest' >".$row['Techfest']."</div>
      </div>";
    }
    echo"
      <div class='form_row'>
        <div class='label'>Student Representative</div>";
        if($row['Rep Name']!=''){
        echo "<div class='form_row'>
          <div class='label'>Name</div>
          <div class='text_input' id='rep_name' >".$row['Rep Name']."</div>
        </div>";
      }
      if($row['Rep Phone']!=''){
        echo "<div class='form_row'>
          <div class='label'>Phone number</div>
          <div class='text_input' id='rep_phone' >".$row['Rep Phone']."</div>
        </div>";
      }
      if($row['Rep Link']!=''){
        echo "<div class='form_row'>
          <div class='label'>Facebook profile link/ Email Id:</div>
          <div class='text_input' id='rep_link' >".$row['Rep Link']."</div>
        </div>";
      }
      echo "</div>";
      echo "<div class='form_row'>
        <div class='label'>Other useful contacts(eg. technical club secretaries):</div>";
        if($row['Robotics contact']!=''){
        echo"
        <div class='form_row'>
          <div class='label'>Robotics</div>
          <div class='text_input' id='contact_rob' >".$row['Robotics contact']."</div>
        </div>";
      }
      if($row['Gaming contact']!=''){
        echo"
        <div class='form_row'>
          <div class='label'>Gaming</div>
          <div class='text_input' id='contact_game' >".$row['Gaming contact']."</div>
        </div>";
      }
      if($row['Other contact']!=''){
        echo "
        <div class='form_row'>
          <div class='label'>Others:</div>
          <div class='text_input' id='contact_other' >".$row['Other contact']."</div>
        </div>";
      }
      echo "</div>";
      if($row['Suggestions']!=''){
        echo"
      <div class='form_row'>
        <div class='label'>Suggestions:</div>
        <div class='text_input' id='suggestions' >".$row['Suggestions']."</div>
      </div>";
    }
  }
}
 ?>
