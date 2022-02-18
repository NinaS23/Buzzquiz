var acertos = 0
var quizz
takeThisQuizz()
function takeThisQuizz(quizz) {

    //const oQuizz = quizz.id  ${id}
    var promQuizz = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/2741")
    promQuizz.then(renderOQuizz);
    /*document.querySelector("")*/
}
function renderOQuizz(raaa) {
    quizz = raaa.data;
    let quizz_title = quizz.title;
    let quizz_image = quizz.image
    let quizz_questions = quizz.questions;
    let level = quizz.levels

    let banner = document.querySelector(".banner");
    banner.innerHTML = `<img src="${quizz_image}"/>
                <div class="titulo">${quizz_title}</div>`;


    //  banner();
    // 1. onclick-> pega a id do quizz, tbm manda o axios pegar quizz, renderizar o q vier da promessa


    for (let i = 0; i < quizz_questions.length; i++) {
        let question = quizz_questions[i];
        let question_title = question.title
        console.log(question_title)


        let pergunta = document.querySelector(".perguntas");
        pergunta.innerHTML += `<div class="pergunta" data-identifier="question">
            <div class="titulo">${question_title}</div>
            <div class="respostas p${i}"></div>
            </div>
            `
            

        for (let j = 0; j < question.answers.length; j++) {
            let respostas = question.answers[j]
            let image = respostas.image
            let text = respostas.text
            let resp = document.querySelector(`.p${i}`)
            resp.innerHTML += `
                <div id = "${i}-${j}" class="resposta" onclick = "respostaSelecionada(${j},${i})"  onclick = "selecionada(${j},${i})" data-identifier="answer">
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





    for (let i = 0; i < level.length; i++) {
        let nivel = level[i];
        let titulo = nivel.title
        let imgN = nivel.image
        let texto = nivel.text
        let valor = nivel.minValue
        let nivelss = document.querySelector(`.final`);
        nivelss.innerHTML = `
        <div class="resultado-quizz" ${nivel} data-identifier="quizz-result">
            <div class="titulo">${valor}: ${titulo}</div>
            <div class="conteudo">
                <img src="${imgN}">
                <div class="texto">${texto}</div>
            </div>
            <button class="reiniciar"  onclick="resetQuizz()">Reiniciar Quizz</button>  
            <button class="voltar"  onclick="loadMainPage()">Voltar oara home</button>  
        </div>`


    }



}


function respostaSelecionada(resposta, pergunta) {
    
    if (quizz.questions[pergunta].respondida){
        
        return
    }
    if (quizz.questions[pergunta].answers[resposta].isCorrectAnswer) {
      
        acertos ++

    }
    
            
    for (let i = 0; i < quizz.questions[pergunta].answers.length; i++) {
        let textO = document.getElementById(`${pergunta}-${i}`)
        if (quizz.questions[pergunta].answers[i].isCorrectAnswer) {
           
            textO.classList.add("alternativa-certa")
        }
        else{
            textO.classList.add("alternativa-errada")
        }
        
    }
    
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


    