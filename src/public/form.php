<?php
$nombre= $_POST['name'];
$email= $_POST['email'];
$asunto= $_POST['asunto'];
$mensaje= $_POST['mensaje'];

$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje.=  "Su e-mail es: " . $email . ",\r\n";
$mensaje.= "El asunto es: ". $asunto . ",\r\n";
$mensaje.= ",\r\n";
$mensaje.=







?>