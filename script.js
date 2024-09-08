let slidereElement = document.querySelector('#slider');
let buttonElement = document.querySelector("#button");


let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");


let containerPassword =document.querySelector("#container-password");


let charset = "abcdefghijklmnopqsrtuvwxzABCDEFGHIJKLMNOPQSTUVWXYZ123456789";
let novaSenha = "";

sizePassword.innerHTML = slidereElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generationpassword(){

    let pass="";

    for(let i = 0, n = charset.length; i < slidereElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random()* n ));
        
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

function copyPassword(){
    alert("SENHA COPIADA COM SUCESSO!")
    navigator.clipboard.writeText(novaSenha);
}