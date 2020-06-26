function consultaCep() {
    $(".barra-progresso").show();

    var cep = document.getElementById("cep").value;
    // console.log(cep);

    var link = "https://viacep.com.br/ws/" + cep + "/json/";
    // console.log(link);
    
    $.ajax({ // Função do JQuery
        url: link,
        type: "GET", // O tipo de requisição é GET.
        success: function(response) { // Se tiver sucesso
            console.log(response); // Se der response.bairro ou qualquer outro, ele retorna somente o que tiver no parâmetro
            // console.log(response.bairro);
            // alert(response.logradouro);

            /*
            
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;


            // Outra forma (JQuery): 

            $("#logradouro").html(response.logradouro); // # é pelo ID e . pela CLASS
            
            */

            $("#titulo_cep").html("CEP: " + response.cep);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#UF").html(response.uf);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function(){
    $(".barra-progresso").hide(); // Puxando da div
    $(".cep").hide(); // Puxando do container
});
