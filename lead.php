<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') exit;
if (!$_POST) exit('No direct script access allowed');
 
if (!isset($_POST['phone'])) exit('No direct script access allowed');

$email = trim(strip_tags($_POST['email']));
$name = trim(strip_tags($_POST['name']));
$phone = trim(strip_tags($_POST['phone']));

if (!$phone)
{
    exit('Не указано телефон! Обновите страницу (F5) и укажите свой телефон');
}
 
$to = 'spektrdlmontaj@gmail.com'; // адрес получателя
$subject = 'SDL potolki, заявка с сайта!'; // тема письма
 
// формируем тело сообщения
$message = 'Имя: ' . $name . "\r\n" . 'Email: ' . $email . "\r\n" . 'Phone: ' . $phone; 
 
// формируем headers для письма
$headers = "From: zakaz@sdl-potolki.ru\r\n"; // от кого
 
// кодируем заголовок в UTF-8
$subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
$subject = preg_replace("/(\t)/", " ", $subject);
$subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
 
// отправка
@mail($to, $subject, $message, $headers);
 
echo 'Спасибо, ваша заявка отправлена!';

?>
