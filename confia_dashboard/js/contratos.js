$(document).ready(function () {
    var table = $('#table-contratos>tbody');
    table.empty();
    var codigo = getURLParam('codigo');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: './src/enviaDados.php',
        data: {
            url: 'ColaboradoresContratos',
            dados: JSON.stringify({ codigo })
        },
        async: false,
        success: function (result) {               
            if (result.length > 0){ 
                $('.contratos').prop("hidden",false);
                Ramais = result;
                Ramais.map((item) => {
                    var tipo = 'Locação';
                    if (item.TIPO == 'F'){
                        tipo = 'Fornecedor';
                    }
                    var destacado = '';
                    var dt = new Date();                      
                    var validade = new Date(
                            item.DATA_FINAL.substr(6,4), // year
                            item.DATA_FINAL.substr(3,2)-2, // month - 30 dias
                            item.DATA_FINAL.substr(0,2)); //day
                    if (dt >= validade){
                        destacado = 'class="destacado"';
                    }
                    table.append(
                        '<tr '+destacado+'> ' +
                        '    <td><strong>' + item.CODIGO_CONTRATO + '</strong></td> ' +
                        '    <td class="alLeft">' + item.NOME + '</td> ' +
                        '    <td class="alLeft">' + tipo + '</td> ' +
                        '    <td class="alLeft">' + item.DATA_FINAL + '</td> ' +
                        '</tr>'
                    );
                })
            }            
            atualizaTabelaNEW($('#table-contratos'));
        }
    })

    function atualizaTabelaNEW(e) {
       e.DataTable({
            "paging": true,
            "ordering": false,
            "info": false,
            "language": {
                "zeroRecords": "Não foram encontrados resultados",
                "lengthMenu":  "",
                "search": "Pesquisa: ",
                "paginate": {
                    "first": "Primeiro",
                    "previous": "Anterior",
                    "next": "Proximo",
                    "last": "Ultimo"
                },
            }
        });
    };
})
