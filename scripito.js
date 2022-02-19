var acertos = 0
var respostas = 0
var quizz
var level
takeThisQuizz()
function takeThisQuizz() {

    //const oQuizz = quizz.id  ${id}
    var promQuizz = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/2741")
    promQuizz.then(renderOQuizz);
    /*document.querySelector("")*/
}


function comparador(){
    return Math.random() - 0.5;
  }

  
function renderOQuizz(raaa) {
    acertos = 0
    respostas = 0
    if(!quizz)
        quizz = raaa.data;
    let quizz_title = quizz.title;
    let quizz_image = quizz.image
    let quizz_questions = quizz.questions;
    level = quizz.levels

    let banner = document.querySelector(".banner");
    banner.innerHTML = `<img src="${quizz_image}"/>
                <div class="titulo">${quizz_title}</div>`;


    //  banner();
    // 1. onclick-> pega a id do quizz, tbm manda o axios pegar quizz, renderizar o q vier da promessa

    let pergunta = document.querySelector(".perguntas");
    pergunta.innerHTML = ""
    for (let i = 0; i < quizz_questions.length; i++) {
        let question = quizz_questions[i];
        let question_title = question.title
        console.log(question_title)


        

        pergunta.innerHTML += `<div id="pergunta-${i}" class="pergunta" data-identifier="question">
            <div class="titulo">${question_title}</div>
            <div class="respostas p${i}"></div>
            </div>
            `
        
            question.answers.sort(comparador)
        for (let j = 0; j < question.answers.length; j++) {
            let respostas = question.answers[j]
            let image = respostas.image
            let text = respostas.text
            let resp = document.querySelector(`.p${i}`)
            resp.innerHTML += `
                <div id = "${i}-${j}" class="resposta" onclick = "respostaSelecionada(${j},${i})"  data-identifier="answer">
                    <img  src="${image}" >
                    <div class="texto" id = "${i}-${j}">${text}</div>
                </div>
                `
                

            //ao selecionar uma resp "esbranqueça as demais, uma vez clicado nao pode ser mudado "
            //percisam ser aleatorias (random)
            //
   
                //caso seja verdadeiro mude a cor do text true para verde e od dms vermelho 
           
            // é preciso contar os acertos se > metade = level 2  se < metade level 1
            // a contagem deve ser feita por porcentagem 
            // exibir titulo e imagem referente ao level 
            //Math.ceil, Math.floor, Math.round   
        }
        

    }   // botao  reiniciar quizz -> deve voltar para o topo da tela e as respostas devem estar zeradas 
    // botao voltar para home ->Tela 1: Lista de Quizzes





}


function respostaSelecionada(resposta, pergunta) {
    
    let textOClica = document.getElementById(`${pergunta}-${resposta}`)
    
    respostas ++;
    if (quizz.questions[pergunta].respondida){
        
        return
    }
    if (quizz.questions[pergunta].answers[resposta].isCorrectAnswer) {
      
        acertos ++

    }


   
    for (let i = 0; i < quizz.questions[pergunta].answers.length; i++) {
        let textO = document.getElementById(`${pergunta}-${i}`)
        if(textO != textOClica) 
            textO.classList.add("selecionada") 
        if (quizz.questions[pergunta].answers[i].isCorrectAnswer) {
           
            textO.classList.add("alternativa-certa")
        }
        else{
            textO.classList.add("alternativa-errada")
        }
        
    }
    let proxPergunta = document.getElementById(`pergunta-${pergunta+1}`)
    if(respostas == quizz.questions.length){
        calcularPontuacao()
        proxPergunta = document.getElementById("resultado")
    }
    setTimeout(()=>{
        proxPergunta.scrollIntoView({behavior: 'smooth'})
    },1000)

  
}

function arredondarPontuacao(){
    let nivel = (acertos/quizz.questions.length) *100
    let arredondamento = Math.round(nivel)
    return arredondamento
}


function calcularPontuacao (){
    //descobrir  qual nivel eu estou.
    let nivel = level[0];
    let pontuacao =  arredondarPontuacao()
    for (let i = 0; i < level.length; i++) {
        let aux = level[i];
        if(pontuacao > aux.minValue){
            nivel = aux
        }
    }
    let nivelss = document.querySelector(`.final`);
    nivelss.innerHTML = `
           <div id="resultado" class="resultado-quizz"data-identifier="quizz-result">
               <div class="titulo">${pontuacao}% ${nivel.title}</div>
               <div class="conteudo">
                   <img src="${nivel.image}">
                   <div class="texto">${nivel.text}</div>
               </div>
               <button class="reiniciar"  onclick="resetQuizz()">Reiniciar Quizz</button>  
               <button class="voltar"  onclick="loadMainPage()">Voltar para home</button>  
           </div>`
}

function selecionada(){
for (let i = 0; i < quizz.questions.length; i++) {
    let textO = document.getElementById(`${i}-${j}`)
    if (quizz.questions[pergunta].respondida) {
       
        textO.classList.add("selecionada")
        }
    }
}
/*    
   textO.classList.add("selecionada")
   document.getElementById('pergunta-card').scrollHeight
let respondidaa = document.querySelector('.resposta');
let sele = ['.selecionada'];
let posicao = 0;

respondidaa.addEventListener('click', function(event){
    posicao = (posicao)%sele.length
    event.target.parentNode.parentNode.className = sele[posicao];
});
*/

function arredonda(x) {
    ret = Math.round(x)
    return ret
    }
 
    
function resetQuizz(){
  //fazer o scroll ir pra cima
  let caixaResultadoEsconder = document.getElementById("resultado")
  caixaResultadoEsconder.classList.toggle("esconder")
  //zerar respostas(aqui preciso de joy)
  //calcularPontuacao()

  let banner = document.getElementById("banner")

setTimeout(()=>{
   banner.scrollIntoView({behavior: 'smooth'})
   renderOQuizz()
},1000)
}

function loadMainPage(){
let SumirPerguntasDiv = document.querySelector(".perguntas")
let SumirFinalDiv = document.querySelector(".final")
let tituloClasseSUMIR = document.querySelector(".banner")
/*selecionar todas as divs e deixar so a da mica sem o queryselctor e 
dai add a classe esconder em todas menos a tela da mica */
SumirPerguntasDiv.classList.add("esconder")
SumirFinalDiv.classList.add("esconder")
tituloClasseSUMIR.classList.add("esconder")
console.log(loadMainPage())
}

/*
Maria Bevenuto11:16
function ValidarQuizz() {
    let urlQuizz = document.querySelector(".Url_quizz")
    let tituloquizz = document.querySelector(".titulo_quizz").value
    let url = document.getElementsByName('url')
    let h6 = document.querySelector("h6")
        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        var t = 'www.google.com';

        if (t.match(regex) && urlQuizz.value  !== "") {
           
Maria Bevenuto11:26
math.round(nivel)
Maria Bevenuto12:13
function arredonda(x) {
let inteiroProximo = Math.round(x);
return inteiroProximo;
}*/