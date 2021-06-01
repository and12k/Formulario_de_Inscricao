/* ------- Validação do CPF no formulário ------- */
function validacaoCpf() {
    console.log('Iniciando validação CPF');

    let cpf = document.getElementById('cpf').value;

    let resultadoValidacao = validaCpf(cpf);
    /* IF, Condição de teste se o cpf é Valido  */
    if (resultadoValidacao == true) {

    }
    else {
        alert("CPF invalido! \n\nPor favor insira um CPF valido");
    }

}
function validaCpf(cpf) {
    /* Primeira validação, quantidade de digitos dos cpf deve ser de exatamennte 11 */
    console.log(cpf.length);

    /*Aplicação de regex para retirar traços ou pontos inseridos e assim realizar a validação do cpf */
    cpf = cpf.replace(/[^0-9]/g, '');
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
        let numeros = cpf.substring(0, 9);
        /* Captura dos digitos do CPF */
        let digitos = cpf.substring(9);
        /* letiavel para incremento dos valores calculados no for abaixo */
        let somaCpf = 0;
        /*Laço de repetição para percorrer por valor da substring do ultimo caractere até o primeiro.*/
        /* Validação do primeiro digito*/
        for (let i = 10; i > 1; i--) {
            console.log(somaCpf)
            somaCpf += numeros.charAt(10 - i) * i;

        }
        let resultado = somaCpf % 11 < 2 ? 0 : 11 - (somaCpf % 11);
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        /* Validação do segundo digito */
        somaCpf = 0;
        numeros = cpf.substring(0, 10);

        for (let k = 11; k > 1; k--) {
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
