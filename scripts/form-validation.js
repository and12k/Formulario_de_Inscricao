function validaForm(){

let name = document.getElementById("nome").value;
let cpf = document.getElementById("cpf").value;
let rg = document.getElementById("rg").value;
let orientacaoSexual = document.getElementById("orientacaoSexual").value;
let cep = document.getElementById("nome").value;
let logradouro = document.getElementById("logradouro").value;
let numero = document.getElementById("numero").value;
let bairro = document.getElementById("bairro").value;
let cidade = document.getElementById("cidade").value;
let estado = document.getElementById("estado").value;
let complemento = document.getElementById("complemento").value;
let telefoneCelular = document.getElementById("telefoneCelular").value;
let telefoneFixo = document.getElementById("telefoneFixo").value;
let possuiDeficiencia = document.getElementById("radioButton").value;

let erros=""

if (name == "" ){
    erros += "Nome\n"
}
if (cpf == "" ){
    erros += "Cpf\n"
}
if (rg == "" ){
    erros += "Rg\n"
}
if (cep == "" ){
    erros += "Cep\n"
}
if (logradouro == "" ){
    erros += "Logradouro\n"
}
if (numero == "" ){
    erros += "Numero\n"
}
if (bairro == "" ){
    erros += "Bairro\n"
}
if (cidade == "" ){
    erros += "Cidade\n"
}
if (estado == "" ){
    erros += "Estado\n"
}
if (telefoneCelular == ""){
    erros += "Telefone celular\n"
}

if (erros){
    alert ("Verifique novamente os campos abaixo:\n"+erros)
    return false;
}

if(telefoneFixo != "" & complemento !="" ){
    alert ("Seus dados foram salvos, confira: \nNome: "+name+"\nCPF: "+cpf+"\nRG: "+rg+"\nTelefone Fixo: "+telefoneFixo+"\nTelefone celular: "+telefoneCelular+"\nOrientação Sexual: "+orientacaoSexual+"\nCep: "+cep+"\nLogradouro: "+logradouro+"\nNumero: "+numero+ "\nComplemento: "+complemento+"\nBairro: "+bairro+"\nCidade: "+cidade+"\nEstado: "+estado+"\nPossui alguma decifiência?: "+ possuiDeficiencia)
}
else if(telefoneFixo != "" ){
    alert ("Seus dados foram salvos, confira: \nNome: "+name+"\nCPF: "+cpf+"\nRG: "+rg+"\nTelefone Fixo: "+telefoneFixo+"\nTelefone celular: "+telefoneCelular+"\nOrientação Sexual: "+orientacaoSexual+"\nCep: "+cep+"\nLogradouro: "+logradouro+"\nNumero: "+numero+"\nBairro: "+bairro+"\nCidade: "+cidade+"\nEstado: "+estado+"\nPossui alguma decifiência?: "+ possuiDeficiencia)
}
else if(complemento != "" ){
    alert ("Seus dados foram salvos, confira: \nNome: "+name+"\nCPF: "+cpf+"\nRG: "+rg+"\nTelefone celular: "+telefoneCelular+"\nOrientação Sexual: "+orientacaoSexual+"\nCep: "+cep+"\nLogradouro: "+logradouro+"\nNumero: "+numero+ "\nComplemento: "+complemento+"\nBairro: "+bairro+"\nCidade: "+cidade+"\nEstado: "+estado+"\nPossui alguma decifiência?: "+ possuiDeficiencia)
}
else{
    alert ("Seus dados foram salvos, confira: \nNome: "+name+"\nCPF: "+cpf+"\nRG: "+rg+"\nTelefone celular: "+telefoneCelular+"\nOrientação Sexual: "+orientacaoSexual+"\nCep: "+cep+"\nLogradouro: "+logradouro+"\nNumero: "+numero+"\nBairro: "+bairro+"\nCidade: "+cidade+"\nEstado: "+estado+"\nPossui alguma decifiência?: "+ possuiDeficiencia)
}
}
