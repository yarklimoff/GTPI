<meta charset="UTF-8" />
<?php
$fio = "ФИО: ".$_POST['fio'].' <br />';
$phone = "Телефон: ".$_POST['phone'].' <br />';
$problem = "Сообщение: "$_POST['problem'].' <br />';
$AllInOne =  $fio.$phone.$problem; 
$to = 'yar.klimoff@yandex.ru'; 
$send = mail($to, 'Свяжитесь с нами', $AllInOne, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email"); 
if ($send == 'true') {echo "Сообщение отправлено";}
// Если письмо не ушло — выводим сообщение об ошибке
else {echo "Ой, что-то пошло не так";}
?>