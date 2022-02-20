function ValidarQuizz() {
    let urlQuizz = document.querySelector(".Url_quizz")
    let tituloquizz = document.querySelector(".titulo_quizz").value
    let url = document.getElementsByName('url')
    let h6 = document.querySelector("h6")
        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        var t = 'www.google.com';

        if (urlQuizz.value.match(regex) ) {
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
         
    }
    function ValidarQuizzTitulo(){
        let tituloquizz = document.querySelector(".titulo_quizz").value
        if(tituloquizz.length > 65 || tituloquizz.length < 20  ){
            alert("Preencha os dados corretamente, pfv!")
        }
    }
    function validarQuantidadeDePerguntas(){
        let perguntasQuizz = document.querySelector(".Perguntas_quizz").value
        if(perguntasQuizz < 3){
            alert("Preencha os dados corretamente, pfv!")
        }
    }
    function validarNiveiQuizz(){
        let NiveisQuizz = document.querySelector(".Niveis_quizz").value
        if(NiveisQuizz < 2 ){
            alert("Preencha os dados corretamente, pfv!")
        }
    }
    