
/* ------- Validação do CEP no formulário ------- */
function validacaoCep() {
    console.log('Iniciando a validação do CEP')
    var cep = document.getElementById('cep').value;
    var resultadoValidacao = validaCep(cep);
    /*IF para respota da validação do cep */

    if (resultadoValidacao == true) {
    }
    else {
        //Limpar formulário de cep
        document.getElementById('logradouro').value = ("");
        document.getElementById('bairro').value = ("");
        document.getElementById('cidade').value = ("");
        document.getElementById('estado').value = ("");
        alert("\nCep não encontrado")
    }
}
function validaCep(cep) {
    /*Aplicação de regex para retirar traços ou pontos inseridos e assim realizar a validação do CEP */
    cep = cep.replace(/[^0-9]/g, '');
    //Validando quantidade de digitos no cep
    if (cep.length != 8) {
        return false;
    }

    //Cria um elemento javascript.
    var script = document.createElement('script')
    //Sincroniza com a validacao
    script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=retornoViaCep';
    console.log(script)

    //Insere script no documento e carrega o conteudo
    document.body.appendChild(script);
    console.log(script)
    return true;
}
function retornoViaCep(endereco) {
    if (!("erro" in endereco)) {
        //atualização dos campos com os valores.
        document.getElementById('logradouro').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
    }
    else {

        return false;
    }
}
function mascaraCep() {
    console.log("1º: " + cep.value)
    cep.value = formulaMascaraCep(cep.value)
}
function formulaMascaraCep(cep) {
    console.log("2º: " + cep)
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/(\d{5})(\d{1,3})$/, "$1-$2")
    return cep;
}