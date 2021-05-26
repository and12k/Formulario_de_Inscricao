/* ------- Validação do CPF no formulário ------- */
function validacaoCpf() {
    console.log('Iniciando validação CPF');

    var cpf = document.getElementById('cpf').value;

    var resultadoValidacao = validaCpf(cpf);
    /* IF, Condição de teste se o cpf é Valido  */
    if (resultadoValidacao == true) {

        mascaraCpf(cpf)
    }
    else {
        alert("CPF invalido! \n\nPor favor insira um CPF valido");
    }

}
function validaCpf(cpf) {
    /* Primeira validação, quantidade de digitos dos cpf deve ser de exatamennte 11 */
    console.log(cpf.length);

    /*Aplicação de regex para retirar traços ou pontos inseridos e assim realizar a validação do cpf */
    cpf = cpf.replace(/[^0-9][x]/g, '');
    console.log(cpf);
    if (cpf == "00000000000" || ['00000000000', '11111111111', '22222222222',
        '33333333333', '44444444444', '55555555555', '66666666666',
        '77777777777', '88888888888', '99999999999'].includes(cpf)) {
        return false;
    }
    if (cpf.length != 11) {
        return false;
    }
    else {
        /* Iniciando nova validação do texto, quebrando em partes com substring*/
        var numeros = cpf.substring(0, 9);
        /* Captura dos digitos do CPF */
        var digitos = cpf.substring(9);
        /* Variavel para incremento dos valores calculados no for abaixo */
        var somaCpf = 0;
        /*Laço de repetição para percorrer por valor da substring do ultimo caractere até o primeiro.*/
        /* Validação do primeiro digito*/
        for (var i = 10; i > 1; i--) {
            console.log(somaCpf)
            somaCpf += numeros.charAt(10 - i) * i;

        }
        var resultado = somaCpf % 11 < 2 ? 0 : 11 - (somaCpf % 11);
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        /* Validação do segundo digito */
        somaCpf = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            console.log(somaCpf)
            somaCpf += numeros.charAt(11 - k) * k;
        }
        console.log(somaCpf)
        resultado = somaCpf % 11 < 2 ? 0 : 11 - (somaCpf % 11);
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;

    }

}
function mascaraCpf() {
    console.log("1º: " + cpf.value)
    cpf.value = formulaMascaraCpf(cpf.value)
}
function formulaMascaraCpf(cpf) {
    console.log("2º: " + cpf)
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf;
}
////////////////////////////////////////////////////

/* ------- Validação do RG no formulário ------- */
function validacaoRg() {
    console.log('Iniciando validação do RG');

    var rg = document.getElementById('rg').value;

    var resultadoValidacao = validaRg(rg);
    /* IF, Condição de teste se o Rg é Valido  */
    if (resultadoValidacao == true) {
        mascaraRg()
    }
    else {
        alert("RG invalido! \n\nPor favor insira um outro numero de RG");
    }
}
function validaRg(rg) {
    /* Primeiras validações, quantidade de numeros do rg deve deve ter exatamente 9 
    e o não pode ser preenchido com 000000000*/
    console.log(rg.length);
    /*Aplicação de regex para retirar traços ou pontos inseridos e assim realizar a validação do RG */
    rg = rg.replace(/[^0-9]/g, '');
    console.log(rg)

    if (rg == "000000000") {
        return false;
    }
    if (rg.length != 9) {
        return false;
    }
    /*Captura 8 primeiros numeros do RG*/
    var numeros = rg.substring(0, 8);
    /* Captura do digito do rg */
    var digito = rg.substring(8);
    /* Variavel para incremento dos valores calculados no for abaixo */
    var somaRg = 0;
    /*Laço de repetição para percorrer por valor da substring por valor dos numeros capturados
    do primeiro ao ultimo.*/
    for (var i = 0; i < 9; i++) {
        console.log(numeros)
        somaRg += numeros.charAt(0 + i) * (i + 2);
    }
    /*Encontrar o resto da soma*/
    var digitoVerificador = somaRg % 11;
    console.log(digitoVerificador)
    /*Se o digito verificador for igual a 1, ele quer dizer que o digito verificador é X*/
    if (digitoVerificador == 1) {
        digitoVerificador = "x";
    }
    /*Se o digito verificador for igual a 0, ele quer dizer que o digito verificador realmente é 0*/
    else if (digitoVerificador == 0) {
        digitoVerificador = "0";
    }
    /* Se ele não for nem 0 e nem 1, você subtrai 11 do digito Verificador*/
    else {
        digitoVerificador = (11 - digitoVerificador);
    }
    console.log(digitoVerificador)

    if (digitoVerificador == digito) {
        return true;
    }
    else {
        return false;
    }
}
function mascaraRg() {
    console.log("1º: " + rg.value)
    rg.value = formulaMascaraRg(rg.value)
}
function formulaMascaraRg(rg) {
    console.log("2º: " + rg)
    rg = rg.replace(/\D/g, "")
    rg = rg.replace(/(\d{2})(\d)/, "$1.$2")
    rg = rg.replace(/(\d{3})(\d)/, "$1.$2")
    rg = rg.replace(/(\d{3})(\d{1})$/, "$1-$2")
    return rg;
}
////////////////////////////////////////////////////

/* ------- Validação do CEP no formulário ------- */
function validacaoCep() {
    console.log('Iniciando a validação do CEP')
    var cep = document.getElementById('cep').value;
    var resultadoValidacao = validaCep(cep);
    /*IF para respota da validação do cep */

    if (resultadoValidacao == true) {
        //atribuir os dados carregados aos campos 
        mascaraCep()
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
////////////////////////////////////////////////////




