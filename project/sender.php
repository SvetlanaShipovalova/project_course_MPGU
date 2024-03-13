<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "savina25ls@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";
	
	$msg= "Спасибо за обратную связь. Ваше мнение для нас очень важно.
Имя: $name
Фамилия: $surname
Почта: $email
Текст: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>
<p style ="text-align:center;">Привет, форма отправлена</p> 
