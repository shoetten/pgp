<?php

// composer autoloader
require __DIR__ . '/vendor/autoload.php';

if ( !isset($_POST["fromEmail"]) ||
     !isset($_POST["fromName"]) ||
     !isset($_POST["toEmail"]) ||
     !isset($_POST["toName"]) ||
     !isset($_POST["content"]) ) {
    echo ( "Error: Nicht alle Felder ausgefüllt!");
    return;
}

$fromEmail = $_POST["fromEmail"];
$fromName = htmlspecialchars($_POST["fromName"]);
$toEmail = $_POST["toEmail"];
$toName = htmlspecialchars($_POST["toName"]);
$subject = htmlspecialchars($_POST["subject"]);
$content = htmlspecialchars($_POST["content"]);

$mail = new PHPMailer;

$mail->setFrom($fromEmail, $fromName);
$mail->addReplyTo($fromEmail, $fromName);
$mail->addAddress($toEmail, $toName);     // Add a recipient

$mail->Subject = $subject;
$mail->Body = $content;

if(!$mail->send()) {
    echo 'Message could not be sent.<br />Mailer Error: ' . $mail->ErrorInfo;
    return;
} else {
    echo 'Nachricht gesendet!';
    return;
}
