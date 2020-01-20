<?php
// XML文件
header("Content-Type: text/xml");
// 取得欄位值
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

