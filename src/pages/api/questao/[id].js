
export default function questao(requisição,resposta) {
    if(requisição.method ==="GET"){
        const id = requisição.query.id
        resposta.status(200).json({id,enuciado: "Qual é a sua cor preferida?",resposta: ['Azul', 'Verde', 'Branco', 'Preto', 'Vermelho', 'Amarelo']})
    }else{
        resposta.status(405).send()
    }
    
}