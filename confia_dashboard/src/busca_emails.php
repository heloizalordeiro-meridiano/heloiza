<?php
    header( 'Content-Type: application/json; charset=iso-8859-1' );
    include 'retornaDataSet.php';
    $commandText = "select e_mail as email from colaboradores where ativo = 'S' and coalesce(e_mail,'') <> '' order by nome";

    $result = ibase_query($commandText);
    $dados = array();
     while ($row = ibase_fetch_assoc($result)){
         $dados[] =  $row["EMAIL"] ;
     }
    echo array2json($dados)
?>