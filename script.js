const alldropdowns = document.querySelectorAll(".js-dropdown")
alldropdowns.forEach(function(item, index){
    item.addEventListener("click", function(){
    console.log(item)
    })
})

// Seleciona os elementos
var modal = document.getElementById("modal");
var contato = document.getElementById("contato");
var closeButton = document.getElementsByClassName("close-button")[0];
var form = document.getElementById("contactForm");

// Quando o botão de contato é clicado, abre o modal
contato.onclick = function() {
    modal.style.display = "block";
}

// Quando o botão de fechar é clicado, fecha o modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha o modal
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// Quando o formulário é enviado, exibe os dados
form.onsubmit = function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    alert("E-mail: " + email + "\nMensagem: " + message);
    modal.style.display = "none";
}