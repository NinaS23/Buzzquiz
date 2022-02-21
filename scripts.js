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
    trocarTela()

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
  function trocarTela(){
      let tchauFrase = document.querySelector(".tchau")
      tchauFrase.classList.add("escondido")
      let oiPerguntas = document.querySelector(".tchauCriarPerguntas")
      oiPerguntas.classList.remove("escondido")
      let TchauMontarQuizz = document.querySelector(".MontarQuizz")
      TchauMontarQuizz.classList.add("escondido")
      let OiContainerPerguntas = document.querySelector(".container_Perguntas")
      OiContainerPerguntas.classList.remove("escondido")
      let oiPerguntasComIcon = document.querySelector(".perguntasComIcom")
      oiPerguntasComIcon.classList.remove("escondido")
      let tchauBotaoInicial = document.querySelector(".TcahuBotaoInicial")
      tchauBotaoInicial.classList.add("escondido")
      let OiperguntasBOtao = document.querySelector(".tchauPerguntas")
      OiperguntasBOtao.classList.remove("escondido")
      
  }

 /*validação da tela 3.2 Perguntas de um quizz */

function textoPerguntaValidar(){
let textoPergunta = document.querySelector(".textoPergunta").value
    if(textoPergunta.length < 20 ){
        alert("Preencha os dados corretamente, pfv!")
    }
    urlPerguntaValidar()
    ValidarInputRespostas()
    validarCorHEXADECIMAL()
    ProsseguiPraCriarNiveis()
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
    function validarCorHEXADECIMAL(){
        var expression ="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";
        var regex = new RegExp(expression);
         let hexadecimal = document.querySelector(".hexa").value
        if (hexadecimal.match(regex)) {
          alert("Successful match");
        } else {
          alert("No match");
        }
    }
    /**aqui é pra aparecer a tea 3.3 e sumir 3.2 */
    function ProsseguiPraCriarNiveis(){
    let telaFinal = document.querySelector(".telaFinal")/*aparecer */
    let niveisEsconder = document.querySelector(".container_Niveis")/*aparecer */
    let niveisComIconSumir = document.querySelector(".niveisComIcon")/*aparecer */
    let Hdois =document.querySelector(".Hdois")/*aparecer */
    let containerPerguntas = document.querySelector(".container_Perguntas")
    let tchauPerguntas = document.querySelector(".tchauPerguntas")
    let pperguntasComIcon = document.querySelector(".perguntasComIcom")
    let tchauCriarPerguntas = document.querySelector(".tchauCriarPerguntas")
    
        containerPerguntas.classList.add("escondido")
        tchauPerguntas.classList.add("escondido")
        pperguntasComIcon.classList.add("escondido")
        tchauCriarPerguntas.classList.add("escondido")
        telaFinal.classList.remove("escondido")
        niveisComIconSumir.classList.remove("escondido")
        niveisEsconder.classList.remove("escondido")
        Hdois.classList.remove("escondido")
        
    
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
 /*Não funciona pra expandir as perguntas */
function perguntasEXPAND(){
    let perguntasIconExpand = document.querySelector(".perguntasComIcon")
    let img = document.querySelector(".notas")
    img.classList.add("escondido")
    perguntasIconExpand.innerHTML += `

    <div class="container_Perguntas escondido">
    <div class="MontarPerguntas">
        <h3>Pergunta 1</h3>
        <input class="textoPergunta" data-identifier="question"type="text" placeholder="Texto da pergunta">
        <input class="hexa" data-identifier="question" type="text" placeholder="Cor de fundo da pergunta">
        <h3>Pergunta 2</h3>
        <input class = "RespostaCorreta" data-identifier="question" type="text" placeholder="Resposta correta">
        <input class="urlPergunta" data-identifier="question" type="text" placeholder="URL da imagem">
        <h3>Respostas incorretas</h3>
        <input class = "respostaIncorreta" data-identifier="question" type="text" placeholder="Resposta incorreta 1">
        <input class="urlPergunta2" data-identifier="question" type="text" placeholder="URL da imagem 1">
        <div class="espacinho">
            <!--só pra separar-->
            <input class = "respoINCORRETA" data-identifier="question" class ="espaço_2" type="text" placeholder="Resposta incorreta 2">
            <input  class="urlPergunta3" data-identifier="question" class ="espaço_2" type="text" placeholder="URL da imagem 2">
        </div>
        <!--só pra separar-->
        <input class = "respostaINC" type="text" placeholder="Resposta incorreta 3">
        <input class="urlPergunta4 type="text" placeholder="URL da imagem 3">
    </div>
</div>
    `
}