// FORMULÁRIOS

let nomeBeneficiario = document.getElementById("nome-beneficiario") //Criação da variável

nomeBeneficiario.value = "Lucas Anderson" //Usado para escrever o valor de um campo


nomeBeneficiario.type //Verificar o type do campo
nomeBeneficiario.id //Verificar o ID do campo
nomeBeneficiario.Required //Verificar se o campo é requerido ou não
nomeBeneficiario.placeholder //Verificar o que está escrito no campo


let valorDeposito = document.getElementById("valor-deposito") //Criação da variável

valorDeposito.value = "dez" //Erro, pois tentamos atribuir uma STRING em um campo que aceita apenas NUMBER

valorDeposito.value = 1000 //Agora dará certo, pois atribuimos NUMBER a um campo do tipo NUMBER


nomeBeneficiario.value.split(" ") //Criamos um separador do nome utilizando o ESPAÇO, onde será gerado um array onde os elementos digitados serão armazenados.

nomeBeneficiario.value.split(" ").length > 3  //Criamos uma validação que requer ao menos 3 NOMES digitados para ser válido.

document.getElementById("btn-depositar").disabled = true //Chamamos a função BUTTON e a desabilitamos

document.getElementById("btn-depositar").disabled = nomeBeneficiario.value.split(" ") < 3  //Desabilitamos o BUTTON apenas se o nome digitado tiver menos do que 3 nomes.