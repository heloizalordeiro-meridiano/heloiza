<?php

$RotaWS = 'http://localhost:10000/datasnap/rest/Service/';

$repo = 'http://sim.meridiano.com.br:3392/v2/rota/repo/';


$repo_img = '/dev/rota_front_v1/img/produtos/';

if(!empty($_GET)){
    $data = $_GET['f'];
    if($data == 'repo'){
        echo $repo;
    }
}

if(!empty($_GET)){
    $data = $_GET['f'];
    if($data == 'repo_img'){
        echo $repo_img;
    }
}

?>