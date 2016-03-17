<?php

$contactName = $_POST['contactName'];
$contactEmail = $_POST['contactEmail'];
$message = $_POST['message'];
$to = "abraham.sylvestre@gmail.com";
$subject = "Portfolio message from: " . $contactName;

mail($to, $subject, $message, "From: " . $contactEmail);
echo "Your message has been sent; I hope to speak with you soon! -Abe";

?>