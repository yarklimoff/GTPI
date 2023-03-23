<?php
$fio = "ФИО: ".$_POST['fio'].' <br />';
$phone = "Телефон: ".$_POST['phone'].' <br />';
$problem = "Сообщение: "$_POST['problem'].' <br />';
$AllInOne =  $fio.$phone.$problem;
$headers="From: User <site@test.ru>\nReply-to:yar.klimoff@yandex.ru\nContent-Type: text/html; charset=\"utf-8\"\n"; 
$to = 'yar.klimoff@yandex.ru'; 
mail($to, 'Свяжитесь с нами', $AllInOne, $headers); 
?>