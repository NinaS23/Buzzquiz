function TelaCriarQuizz(){
    let TchauMontarQuizz = document.querySelector(".MontarQuizz")
    let tchauFrase = document.querySelector(".tchau")
    let botao = document.querySelector(".prosseguirBotao ")
    let tchauBotaoInicial = document.querySelector(".TcahuBotaoInicial")
    let main1 = document.querySelector("section")
    let hx = document.querySelector(".hx")
    let todos = document.querySelector(".todos-os-quizzes")
    tchauBotaoInicial.classList.remove("escondido")
    botao.classList.remove("escondido")
    tchauFrase.classList.remove("escondido")
     TchauMontarQuizz.classList.remove("escondido")
     main1.classList.add("escondido")
     hx.classList.add("escondido")
     todos.classList.add("escondido")
     
}