<?php
// XML���
header("Content-Type: text/xml");
// ���o����
$name = (isset($_POST["name"]) ) ? $_POST["name"] : $_GET["name"];
$type = (isset($_POST["type"]) ) ? $_POST["type"] : $_GET["type"];
echo "<?xml version=\"1.0\" ?>";
if ($type == "date")
   $output = date("m/j/Y");
else
   $output = date("h:i:s A");
echo "<datetime>"; 
echo "<name>" . $name . "</name>";
echo "<data>" . $output . "</data>";
echo "</datetime>";
?> 

