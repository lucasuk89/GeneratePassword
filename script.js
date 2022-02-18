let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");


let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321!#@";
let novaSenha = "";

// Pegando valor que colocamos de 15 
//sliderElement.value EU pego o valor que o customer selecionou.
sizePassword.innerHTML = sliderElement.value;

// pegando nosso slider , passando pra funcao e recebendo alteracao do tamanho do size..de 5 ate 25 e atribuimos esse valor.
//sizepassword recebe a alteracao do valor.
slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {

    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        //passando a primeira e colocando ali em cima por isso += , charset acessar variavel , char at pra pegar uma posicao
        pass += charset.charAt(Math.floor(Math.random() * n));

    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

// *n eh o numero ali dentro do charset
//math.floor pra gerar um numero inteiro
//math.rando pra gerar um numero aleatorio.

// para ao clicar copiar a senha...
function copyPassword() {
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}