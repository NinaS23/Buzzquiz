function ValidarQuizz() {
    let urlQuizz = document.querySelector(".Url_quizz")
    let url = document.getElementsByName('url')
    let h6 = document.querySelector("h6")
        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        var t = 'www.google.com';

        if (t.match(regex)) {
            alert("Successful match");
        } else {
            urlQuizz.classList.add("redBackground")/*bonus*/ 
            h6.classList.remove("escondido")/*bonus*/ 
            url[0].placeholder = 'url_fora_do_padrao';/*bonus*/ 
            alert("Preencha os dados corretamente, pfv!")
        }
        validarNiveisQUizz()
        ValidarQuizzPerguntas()
        validarTituloQuizz()
    }
    function ValidarQuizzPerguntas() {
    let perguntas= document.querySelector(".Perguntas_quizz");
    let h6 = document.querySelector("h6")
     if (perguntas <= "3") {
        perguntas.classList.add("redBackground")
        h6.classList.remove("escondido")
        perguntas[0].placeholder = perguntasquizz.value
        alert("Preencha os dados corretamente, pfv!")
        
        }
    
    }
    function validarTituloQuizz() {
    let tituloquizz = document.querySelector(".titulo_quizz").value
    if (tituloquizz.length < 20 && tituloquizz.length > 65) {
        alert("Preencha os dados corretamente, pfv!")
        }
    }
    function validarNiveisQUizz() {
    let NiveisQUizz = document.querySelector(".Niveis_quizz")
    if (parseInt(NiveisQUizz.value) < 2) {
        alert("Preencha os dados corretamente, pfv!")
    }
}