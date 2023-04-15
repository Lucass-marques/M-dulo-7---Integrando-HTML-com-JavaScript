let form = document.getElementById("verificador");

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const valorUm = parseFloat(document.getElementById("valor-1").value);
    const valorDois = parseFloat(document.getElementById("valor-2").value);
    const successMessage = `Perfeito! ${valorDois} é MAIOR que ${valorUm}!`
    const errorMessage = `Cuidado! ${valorDois} é MENOR que ${valorUm}!`

    function validarNumero (valorUm, valorDois){
        return valorDois > valorUm;
    }

    formEValido = validarNumero(valorUm, valorDois);

    if(formEValido) {
        const containerSuccessMessage = document.querySelector(".success-message");
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = "block";

    }
    else {
        const containerErrorMessage = document.querySelector(".error-message");
        containerErrorMessage.innerHTML = errorMessage;
        containerErrorMessage.style.display = "block";
        valorUm.style.border = "1px solid red";
    }
})