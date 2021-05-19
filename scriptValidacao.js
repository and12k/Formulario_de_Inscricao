/* ------- Validação do CPF no formulário ------- */
function validacaoCpf() {
    console.log('Iniciando validação CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf').value;

    var resultadoValidacao = validaCpf(cpf);
    /* IF, Condição de teste se o cpf é Valido  */
    if (resultadoValidacao == true) {
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }

}

function validaCpf(cpf) {
    /* Primeira validação, quantidade de digitos dos cpf deve ser de exatamennte 11 */
    console.log(cpf.length);

    if (cpf == "00000000000")
    {
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
        /* Variavel para controle do laço */
        /*Laço de repetição para percorrer por valor da substring do ultimo caractere até o primeiro.*/
        /* Validação do primeiro digito*/ 
        for (var i = 10 ; i > 1; i--) {
            console.log(somaCpf)
            somaCpf += numeros.charAt(10 - i) * i;
                        
        }
        var resultado = somaCpf % 11 < 2 ? 0 : 11 - (somaCpf % 11);
        if (resultado != digitos.charAt(0))
        {
            return false;
        }
        
        /* Validação do primeiro digito */
        somaCpf = 0;
        numeros = cpf.substring(0,10);
               
        for (var  k = 11; k > 1; k--){
            console.log(somaCpf)
            somaCpf += numeros.charAt(11 - k) * k;
        }
        console.log (somaCpf)
        resultado = somaCpf % 11 < 2 ? 0 : 11 - (somaCpf % 11);
        if (resultado != digitos.charAt(1))
        {
            return false;
        }
        
        return true;

    }

}

function validacaoRg(){
    console.log('Iniciando validação RG');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    var cpf = document.getElementById('rg').value;

    var resultadoValidacao = validaRg(rg);
    /* IF, Condição de teste se o cpf é Valido  */
    if (resultadoValidacao == true) {
        document.getElementById('success').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'block';
    }

}


function validaRg(rg){

}