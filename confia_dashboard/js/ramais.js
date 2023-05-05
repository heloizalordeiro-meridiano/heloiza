$(document).ready(function () {
    var table = $('#tb-ramais>tbody');
    table.empty();
    var codigo = 0;
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: './src/enviaDados.php',
        data: {
            url: 'ColaboradoresRamais',
            dados: JSON.stringify({ codigo })
        },
        async: false,
        success: function (result) {
            Ramais1 = result;
            Ramais0 = Ramais1.splice(0, Math.round(Ramais1.length / 2));
            Ramais0.map((item, i) => {
                NOME = '';
                RAMAL = '';
                if (i < Ramais1.length) {
                    NOME = Ramais1[i].NOME;
                    RAMAL = Ramais1[i].RAMAL;
                }

                table.append(
                    '<tr> ' +
                    '    <td class="alLeft">' + item.NOME + '</td> ' +
                    '    <td><strong>' + item.RAMAL + '</strong></td> ' +
                    '    <td style="width:30px;">&nbsp;</td> ' +
                    '    <td class="alLeft">' + NOME + '</td> ' +
                    '    <td><strong>' + RAMAL + '</strong></td> ' +
                    '</tr>'
                );
            })
            atualizaTabela();
        }
    })

    function atualizaTabela() {
        $('#tb-ramais').DataTable({
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
