document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }
    const titulo = form.titulo.value
    const descricao = form.descricao.value
    const pontos = form.pontos.value

    validar(tarefa)

    console.log(tarefa)

    
})

function validar(tarefa){
    limparErros()

    if(tarefa.titulo.trim() == "" ){
        document.querySelector("#titulo").classList.add("is-erro")
        document.querySelector("#titulo-erro").innerText = "o título é obrigatório"
    }
}

function validar(tarefa){
    if(tarefa.descricao.trim() == " " || tarefa.descricao.length <10){
        document.querySelector("#descricao").classList.add("is-erro")
        document.querySelector("#descricao-erro").innerText = "A descrição deve ter no minimo 10 cacarteres"
    }
}

function validar(tarefa){
    if(tarefa.titulo.trim()){
        document.querySelector("#descricao").classList.add("is-erro")
        document.querySelector("#descricao-erro").innerText = "A descrição deve ter no minimo 10 cacarteres"
    }
}

function limparErros(){
    document.querySelectora("input .is-erro, textare .is-erro").classList.remove("is-erro")
}