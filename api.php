<?php

//leggo il file json dal disco
$fileContent = file_get_contents("dati.json");


//se ho i dati per aggiungere uno studente...
if( isset($_POST)) {

    //converto il json in un array associativo php
    $students = json_decode($fileContent, true);

    //creo un nuovo studente
    $newTask = [
        $_POST["newTask"]
        
    ];


    //pusho lo studente appena creato nel mio array
    $todolist[] = $newTask;

    //converto tutto l'array in un json
    $fileContent = json_encode($todolist);

    //scrivo il json su disco
    file_put_contents("dati.json", $fileContent);
    
}


header('Content-Type: application/json');

echo $fileContent;