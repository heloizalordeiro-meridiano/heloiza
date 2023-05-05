<?php
    include 'conexao.php'; 
    $codigo = $_GET['codigo'];
	$select = "select e_mail from colaboradores where codigo_colaboradores = $codigo";
	try{
		$result = ibase_query($select);
		$campo = ibase_fetch_row($result);
		echo $campo[0];		
	}catch(PDOException $e){
		echo '';
	}

?>