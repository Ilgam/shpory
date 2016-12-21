<?php
  header('Content-Type: application/json');

  $error = $_FILES['files']['error'];
  switch($error) {
    case 0 :
      $error = 'нет';
      break;    
    case 1 : case 2 :
      $error = 'слишком большой файл';
      break;
    case 3 :
      $error = 'файл загружен частично';
      break;
    case 4 :
      $error = 'файл не был загружен';
  }  

  echo json_encode(array(
        'name' => $_POST['name'],
        'lastname' => $_POST['lastname'],
        'file_name' => $_FILES['files']['name'],
        'mime_type' => $_FILES['files']['type'],
        'file_size' => $_FILES['files']['size'],
        'robot' => $_POST['robot']
    ));
?>