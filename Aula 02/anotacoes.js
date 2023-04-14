//SELETORES

let inputs = document.getElementsByTagName('input') //Para selecionar todos os itens através da TAG

inputs[1] 

document.getElementById() //Para selecionar um elemento pelo seu ID.
document.getElementById("nome-beneficiario")

document.getElementsByClassName() //Para selecionar um elemento através do nome de sua classe.

document.querySelector() //Forma mais avançada de selecionar elementos.

document.querySelector("input[type=number]") //Para selecionar um elemento específico através de seu type
document.querySelectorAll("input[type=number]") //Usando o ALL selecionamos TODOS os elementos daquele mesmo type.

document.querySelector("input#numero-conta") //Podemos também pesquisar por IDs usando o QuerySelector

document.querySelector("h1") //Para pesquisar por tags no body.