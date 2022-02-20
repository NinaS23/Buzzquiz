function ValidarQuizz() {
    let urlQuizz = document.querySelector(".Url_quizz")
    let tituloquizz = document.querySelector(".titulo_quizz").value
    let url = document.getElementsByName('url')
    let h6 = document.querySelector("h6")
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    var t = 'www.google.com';

    if (urlQuizz.value.match(regex)) {
        alert("Successful match");
    } else {
        urlQuizz.classList.add("redBackground")/*bonus*/
        h6.classList.remove("escondido")/*bonus*/
        url[0].placeholder = 'url_fora_do_padrao';/*bonus*/
        alert("Preencha os dados corretamente, pfv!")
    }
    ValidarQuizzTitulo()
    validarQuantidadeDePerguntas()
    validarNiveiQuizz()
    prosseguirPraTelaFinal()

}
function ValidarQuizzTitulo() {
    let tituloquizz = document.querySelector(".titulo_quizz").value
    if (tituloquizz.length > 65 || tituloquizz.length < 20) {
        alert("Preencha os dados corretamente, pfv!")
    }
}
function validarQuantidadeDePerguntas() {
    let perguntasQuizz = document.querySelector(".Perguntas_quizz").value
    let h = document.querySelector(".Hseis")
    if (perguntasQuizz < 3) {
        alert("Preencha os dados corretamente, pfv!")
        perguntasQuizz.classList.add("redBackground")
        h.classList.remove("escondido")/*bonus*/


    }
}
function validarNiveiQuizz() {
    let NiveisQuizz = document.querySelector(".Niveis_quizz").value
    if (NiveisQuizz < 2) {
        alert("Preencha os dados corretamente, pfv!")
    }
}
    /* validação dos niveis dos quizz (tela 3.3) */
function TelaDosNiveisValidar() {
    let url = document.querySelector(".urlNivel")
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    var t = 'www.google.com';

    if (url.value.match(regex)) {
        alert("Successful match");
    } else {
        alert("No match");
    }
    tituloDoNivelValidar()
    porcetagemDeAcertoValidar()
    validarTextArea()
    prosseguirPraTelaFinal()
 }  
 function tituloDoNivelValidar(){
 let nivelTitulo = document.querySelector(".titleNivel").value
 if(nivelTitulo.length < 10){
     alert("Preencha os dados corretamente, pfv!")
 }
 }
 function porcetagemDeAcertoValidar(){
     let acertos = document.querySelector(".acertos").value
     if(acertos < 0 || acertos > 100){
        alert("Preencha os dados corretamente, pfv!")
     }else if(acertos == 0){
         alert("tem que existir um nivel ao menos , caso a porcentagem min seja 0")
     }else{
        alert("Successful match");
     }
 }
 function validarTextArea(){
     let textArea = document.getElementById("message").value
     if(textArea.length < 30){
        alert("Preencha os dados corretamente, pfv!")
     }
 }
 function prosseguirPraTelaFinal(){
     let telaFinal = document.querySelector(".telaFinal")/*sumir */
    let niveisEsconder = document.querySelector(".container_Niveis")/*sumir */
    let niveisComIconSumir = document.querySelector(".niveisComIcon")/*sumir */
    let Hdois =document.querySelector(".Hdois")/*sumir */
    let TRESquatro = document.querySelector(".TRESquatro")
    let card = document.querySelector(".cardDecoration")
    let quatroTRES = document.querySelector(".quatroTres")
    
    if(ValidarQuizz){
       telaFinal.classList.add("escondido")
       niveisComIconSumir.classList.add("escondido")
       niveisEsconder.classList.add("escondido")
       Hdois.classList.add("escondido")
       TRESquatro.classList.remove("escondido")
       card.classList.remove("escondido")
       quatroTRES.classList.remove("escondido")
    }
 }
 