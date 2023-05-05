$(document).ready(function(){    
    var table = $('#chamados>tbody');
    table.empty(); 
    var codigo = getURLParam('codigo');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: './src/enviaDados.php',
        data: {
            url: 'ColaboradoresChamados',
            dados: JSON.stringify({ codigo })    
        },
        async: false,
        success: function (result) {
            if (result.length > 0){
                $('.chamados').prop("hidden", false);
                
                for (var i = 0; i < result.length; i++) {
                    
                    var item = result[i]; 

                    switch(item.PRAZO){
                        case 'Fechado  ':
                            cor = 'style="font-weight: bold; color: green;"';
                        break;
                        case 'Andamento':
                            cor = 'style="font-weight: bold; color: blue;"';
                        break;
                        default:
                            cor = 'style="font-weight: bold; color: red;"';
                        break;
                    }
                   
                    table.append(
                    '<tr>'+ 
                        '<td class="alLeft">'+item.CODIGO_CHAMADO+'</td>'+
                        '<td class="alLeft">'+item.DATA+'</td>'+
                        '<td class="alLeft">'+item.HORA+'</td>'+
                        '<td class="alLeft">'+item.DESCRICAO+'</td>'+
                        '<td class="alLeft"><button type="button" class="btn btn-custom btn-xs btn-block rounded-pill" '+cor+' >'+item.PRAZO+'</button></td>'+
    
                    '</tr>');                 
                }
            } 
                    var fechado = 'Fechado  ';
                    var aberto = 'Aberto  ';
                    var andamento = 'Andamento';

                    abertos = $('#chamados>tbody tr:contains(' + aberto + ')').length;
                    $('#btn-aberto').text("Abertos (" + abertos + ")");
                        
                    fechados = $('#chamados>tbody tr:contains(' + fechado + ')').length;
                    $('#btn-fechado').text("Fechados (" + fechados + ")");

                    emAndamento = $('#chamados>tbody tr:contains(' + andamento + ')').length;
                    $('#btn-andamento').text("Andamento (" + emAndamento + ")");

                    var todos = $('#chamados>tbody tr').length;
                    $('#btn-todos').text("Todos (" + todos + ")");
                   
                                
            atualizaTabela();        
   
        }
    })
}) 
    
        function atualizaTabela() {
            $('#chamados').DataTable({
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
        
    
       
    //Acompanhamento chamados 
        $('#chamados').on('click', 'button', function() {
            var codigo = $(this).closest('tr').find('td:first-child').text();  // peguei o valor da primeira coluna da linha da tabela
            var url = 'http://sim.meridiano.com.br:83/chamado/?p=acompanhamento&id=' + codigo;
            window.open(url, '_blank') ;           
        })
    
    //Botão + (para novo atendimento)        
        $('#btn-novochamado').click(function() {
                var url = 'http://sim.meridiano.com.br:83/chamado/'
                window.open(url, '_blank') ; // redireciona para a página de destino
        })
        
   
    //Chamados abertos         
    $(document).ready(function() {
        
        $('#btn-aberto').click(function() {
            var table = $('#chamados').DataTable();      
            table.column(4).search('Aberto').draw();
                
        });

        $('#btn-fechado').click(function() {
            var table = $('#chamados').DataTable();
            table.column(4).search('Fechado').draw();
                    
        });

        $('#btn-andamento').click(function() {
            var table = $('#chamados').DataTable();
            table.column(4).search('Andamento').draw();
                    
        });
      

    //Todos os chamados
        $('#btn-todos').click(function() {
            var table = $('#chamados').DataTable();
            table.destroy();

            //reinicia a table
            atualizaTabela(); 
            $('#chamados').DataTable();
            
        }) 
    })

          
   
 
    