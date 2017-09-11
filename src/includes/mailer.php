<?php

include('PHPMailer/PHPMailer.php');
include('PHPMailer/Exception.php');
include('PHPMailer/SMTP.php');
//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
    // email to send to
    $myemail = 'server@proximitylab.com';

    // name
    $name = $_POST['name'];

    // email
    $email = $_POST['email'];

    // subject
    $subject = $_POST['subject'];

    // message
    $message = $_POST['message'];

    //SMTP needs accurate times, and the PHP time zone MUST be set
    //This should be done in your php.ini, but this is how to do it if you don't have access to that
    date_default_timezone_set('Etc/UTC');
    //Create a new PHPMailer instance
    $mail = new PHPMailer;
    //Tell PHPMailer to use SMTP
    $mail->isSMTP();
    //Enable SMTP debugging
    // 0 = off (for production use)
    // 1 = client messages
    // 2 = client and server messages
    $mail->SMTPDebug = 0;
    //Set the hostname of the mail server
    $mail->Host = 'smtp.gmail.com';
    //Set the SMTP port number - likely to be 25, 465 or 587
    $mail->Port = 587;
    //Whether to use SMTP authentication
    $mail->SMTPAuth = true;
    //Username to use for SMTP authentication
    $mail->Username = 'server@proximitylab.com';
    //Password to use for SMTP authentication
    $mail->Password = 'R$Y*4WWMSGn2*87M';
    //Set who the message is to be sent from
    $mail->setFrom('server@proximitylab.com', 'Proximity Lab Server');
    //Set an alternative reply-to address
    $mail->addReplyTo('info@proximitylab.com', 'Proximity Lab Info');
    //Set who the message is to be sent to
    $mail->addAddress('josh.rose@proximitylab.com', 'Proximity Lab Info');
    //Set the subject line
    $mail->Subject = $subject." From:".$name;
    //Read an HTML message body from an external file, convert referenced images to embedded,
    //convert HTML into a basic plain-text alternative body
    $mail->msgHTML("<p>You have received a new message. Here are the details:</p><div><b>Name:</b> $name</div><div><b>Email:</b> $email</div><div><b>Subject:</b> $subject</div><div><b>Message:</b><p>$message</p></div>");
    //Replace the plain text body with one created manually
    //$mail->AltBody = "You have received a new message. Here are the details:\n \n Name: $name \n Email: $email \n Subject: $subject \n Message: \n $message";
    //Attach an image file
    //$mail->addAttachment('images/phpmailer_mini.png');
    //send the message, check for errors
    if (!$mail->send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo; // TODO: use this to show an error message
    } else {
        echo 'Thanks for reaching out. We\'ll be in touch shortly.'; // TODO: use this to show a success message
    }
  }
}

?>