<?php
include 'retornaDados_1.php';
include 'custom/rotinas.php';

$dados = $_POST['dados'];

$url = $RotaWS . $_POST['url'];

echo enviaDados($dados, $url);
?>