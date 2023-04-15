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
    
    const containerSuccessMessage = document.querySelector(".success-message");
    const containerErrorMessage = document.querySelector(".error-message");

    if(formEValido) {
        
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = "block";
        containerErrorMessage.style.display = "none";

    }
    else {
        
        containerErrorMessage.innerHTML = errorMessage;
        containerErrorMessage.style.display = "block";
        containerSuccessMessage.style.display = "none";
    
    }
})