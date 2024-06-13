<?php

$todolist = [ "Pulire il pavimento", "Cucinare", "Andare al supermercato", "Portare fuori il cane", "Fare la lavatrice" ];

header('Content-Type: application/json');

$jsonString = json_encode($todolist);

echo $jsonString;