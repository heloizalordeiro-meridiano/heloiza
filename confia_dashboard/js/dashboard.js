var arquivos = [];    
$(document).ready(function () {       
    $.ajax({
        url: './cards/',
        type: "GET",
        async: false,
        success: function (data) {		
            var allLinks = $(data).find('a');
            $.each(allLinks, function (index) {
                var arquivo = allLinks[index].outerText;
                if (arquivo.split('.')[1] == 'html') {
                    arquivos[index] = allLinks[index].outerText;
                }
            })
            carregaArquivos(arquivos);
        }
    });
})
function carregaArquivos() {
    $.each(arquivos, function (index) {
        var col = 0;
        if (index > 4) {
            col = 1;
        }
        if (arquivos[index] != undefined){
            $('#col-' + col).append('<div id="left-frame-' + index + '"></div>');
            $('#left-frame-' + index).load('./cards/' + arquivos[index]);
        }
    })
}    
