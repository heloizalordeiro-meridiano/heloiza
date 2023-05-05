<?php
	include 'conexao.php';

	function array2json($arr) {     
		$parts = array(); 
		$is_list = false; 
		
		$keys = array_keys($arr); 
		$max_length = count($arr)-1;
		if($keys != null){
            if(($keys[0] == 0) and ($keys[$max_length] == $max_length)) {
                $is_list = true;
                for($i=0; $i<count($keys); $i++) {
                    if($i != $keys[$i]) {
                        $is_list = false;
                        break;
                    }
                }
            }
            foreach($arr as $key=>$value) {
                if(is_array($value)) {
                    if($is_list) $parts[] = array2json($value);
                    else $parts[] = '"' . $key . '":' . array2json($value);
                } else {
                    $str = '';
                    if(!$is_list) $str = '"' . $key . '":';


                    if(is_numeric($value)) $str .= $value;
                    elseif($value === false) $str .= 'false';
                    elseif($value === true) $str .= 'true';
                    else $str .= '"' . addslashes($value) . '"';


                    $parts[] = $str;
                }
            }
            $json = implode(',',$parts);

            if($is_list) return '[' . $json . ']';
            return '{' . $json . '}';

        }
	}
	
	function retornaDataSet($sql) {
		$result = ibase_query($sql);

		$dados = array();
		while ($row = ibase_fetch_assoc($result)){
            foreach($row as $i => $elemento){
                $row[$i] = _trataTabulacao($row[$i]);
            }
            $dados[] =  $row ;
        }

		return  array2json($dados);
	}	
	
	if (!empty($_POST["commandText"])){
		$sql = $_POST["commandText"];
		echo  retornaDataSet($sql);
    }
    
    function _trataTabulacao($elemento){        
        $text = trim(preg_replace('/\t+/', '', $elemento));
        $text = trim(preg_replace('/\n+/', '', $text));
        return $text;
    }
?> 