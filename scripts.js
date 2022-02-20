/*validar o inicio da criação de um quizz */
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
 /*validação da tela 3.2 Perguntas de um quizz */
function textoPerguntaValidar(){
let textoPergunta = document.querySelector(".textoPergunta").value
    if(textoPergunta.length < 20 ){
        alert("Preencha os dados corretamente, pfv!")
    }
    urlPerguntaValidar()
    ValidarInputRespostas()
}
function urlPerguntaValidar(){
    let urlPergunta = document.querySelector(".urlPergunta")
    let urlPergunta2 = document.querySelector(".urlPergunta2")
    let urlPergunta3 = document.querySelector(".urlPergunta3")
    let urlPergunta4  = document.querySelector(".urlPergunta4")
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    var t = 'www.google.com';

    if (urlPergunta.value.match(regex) && urlPergunta2.value.match(regex) && urlPergunta3.value.match(regex) && urlPergunta4.value.match(regex)){
        alert("Successful match");
    }else{
        alert("Preencha os dados corretamente, pfv!")
    }
    }
    function ValidarInputRespostas(){
        let respostasCorretas = document.querySelector(".RespostaCorreta").value
        let respostaIncorreta = document.querySelector(".respostaIncorreta").value
        let respoINCORRETA = document.querySelector(".respoINCORRETA").value
        let respostaINC = document.querySelector(".respostaINC").value
        if(respostasCorretas == "" || respostaIncorreta == "" && respostaINC == "" && respoINCORRETA == ""){
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
 /**essa função faz a tela 3.3 sumir e dar lugar a tela 3,4 */
 function prosseguirPraTelaFinal(){
     let telaFinal = document.querySelector(".telaFinal")/*sumir */
    let niveisEsconder = document.querySelector(".container_Niveis")/*sumir */
    let niveisComIconSumir = document.querySelector(".niveisComIcon")/*sumir */
    let Hdois =document.querySelector(".Hdois")/*sumir */
    let TRESquatro = document.querySelector(".TRESquatro")
    let card = document.querySelector(".cardDecoration")
    let quatroTRES = document.querySelector(".quatroTres")
    let botaofinal = document.querySelector(".botaoFinal")
    
    if(ValidarQuizz){
       telaFinal.classList.add("escondido")
       niveisComIconSumir.classList.add("escondido")
       niveisEsconder.classList.add("escondido")
       Hdois.classList.add("escondido")
       TRESquatro.classList.remove("escondido")
       card.classList.remove("escondido")
       quatroTRES.classList.remove("escondido")
       botaofinal.classList.remove("escondido")
    }
 }
