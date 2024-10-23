let sliderElement = document.querySelector("#slider"); //document.querySelector acessa o arquivo HTML e traz algum elemento no parenteses, no caso, o id = button contendo um <input>

let buttonElement = document.querySelector("#button-cta"); //acessa o <button> do html contendo o id = button e armazena em uma variável

let sizePassword = document.querySelector("#Valor"); // acessa o span com id = Valor do HTML

let password = document.querySelector("#password"); // acessa o span com id = password, que contém o valor da senha

let containerPassword = document.querySelector("#container-password") // acessa a div contendo os 3 spans relacionado à senha gerada

// NÂO ESQUECER O ("#nome da id") antes de cada id dentro do querySelector
let novasenha = ""

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*()-_+=<>:;[]{}" // caracteres possíveis na senha

sizePassword.innerHTML = sliderElement.value;//innerHTML é o texto dentro da tag, no caso é o span contendo o id = Valor, que vai receber o valor do sliderElement

// PASSO PARA FAZER O .innerHTML do sizePassword (o texto html do <span id=Valor> receber o valor do slider

slider.oninput = function(){ // oninput é um evento que ocorre dentro de um <input>, no caso:
    sizePassword.innerHTML = this.value; // sizePassword.innerHTML(valor numérico do tamanho da senha) vai receber o valor atual do slider
                                         // this.value contém o valor atual do slider
                                         //innerHTML é o texto HTML dentro do span contendo o id = Valor   
}

function generatePassword() {
    let pass = ""
    // charset.length é o número total de caraceters dentro do charset
    // este laço será executado enquanto o for menor que o valor numérico do slider
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n)) //charAt pega a posição de uma cadeia de string, math.floor gera um número inteiro

        // pass vai receber/somar com um caractere aleatório dentro do charset durante o laço. o charAt vai definir cada caractere
    }

    containerPassword.classList.remove("hide") // vai acessar a lista de class dentro do containerPassword e remover a class hide que oculta a div da senha gerada por meio do arquivo CSS

    password.innerHTML = pass // o texto HTML contendo a senha vai receber a cadeia de strings gerada no pass

    novasenha = pass

    //console.log(pass); // não esquecer que pass é uma variável de escopo local dentro de uma função
}

function copyPast(){ // função para copiar a senha gerada ao clicar no na div container-password
    alert("Sua senha foi copiada!")
    navigator.clipboard.writeText(novasenha) // comando que faz copiar a senha gerada
}
