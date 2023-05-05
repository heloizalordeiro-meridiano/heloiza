$(document).ready(function () {
    var codigo = getURLParam('codigo');
    var tipo_dado = '';
    var v_dados = { codigo, tipo_dado }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        async: false,
        url: './src/enviaDados.php',
        data: {
            url: 'DadosVendedor',
            dados: JSON.stringify(v_dados)
        },
        success: function (result) {               
            $('#nome-usuario').html(result.NOME);
            $('#vencimento-senha').html(result.VENCIMENTO_SENHA);
            $('#email-usuario').html(result.EMAIL);          
            if (result.FOTO != ''){
                $('.img-perfil').attr('src','data:image/png;charset=utf-8;base64,'+result.FOTO);
            }
        }
    })

})