/* ------- Validação do RG no formulário ------- */
function validacaoRg() {
    console.log('Iniciando validação do RG');

    var rg = document.getElementById('rg').value;

    var resultadoValidacao = validaRg(rg);
    /* IF, Condição de teste se o Rg é Valido  */
    if (resultadoValidacao == true) {
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
    else if (digitoVerificador = "x") {
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