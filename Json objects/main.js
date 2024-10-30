const pessoa={
    nome:"caio",
    canal:"CFB cursos",
    curso:"Javascript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"If e Else"
    }
}

const string_pessoa = {"nome":"caio","canal":"CFB cursos","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"If e Else"}}

const s_json_pessoa=JSON.stringify(pessoa)

const o_json_pessoa=JSON.parse(s_json_pessoa)

console.log(s_json_pessoa)
console.log(o_json_pessoa)