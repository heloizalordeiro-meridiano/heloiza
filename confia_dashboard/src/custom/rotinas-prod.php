<?php

$RotaWS = 'http://192.168.0.27:10010/datasnap/rest/Service/';

$repo = 'http://sim.meridiano.com.br/rota/repo/';


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