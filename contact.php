<?php

// configure
$from = 'moongoldproductions@gmail.com'; 
$sendTo = 'moongoldproductions@gmail.com';
$subject = 'Uus kiri veebilehelt';
$fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in email
$okMessage = 'Teie kiri saadeti edukalt edasi. Täname ning võtame peagi Teiega ühendust!';
$errorMessage = 'Tekkis viga Teie kirja edastamisel. Palun proovige hiljem uuesti.';

// let's do the sending

try
{
    $emailText = "Uus kiri veebilehelt\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}
