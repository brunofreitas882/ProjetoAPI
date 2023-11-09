export default function questao() {

    fetch('http:localhost:4077/api/questao/1020') // Testar a chamada a API
        /**isso vai retornar uma promessa na resposta,
         * vai ter um método json, que vai trazer a resposta.
         * ele também vai retorna uma promessa. */


        .then(resp => resp.json())//Aqui vai chegar a resposta, que contem um método Json
        .then(json => console.log(json))//Aqui pega o Json recebido do Back-end é mostrar no consoloe

    return (
        <div>
            Questão
        </div>
    )
}