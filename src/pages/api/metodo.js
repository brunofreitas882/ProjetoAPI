export default (req, res) => {
    if(req.method==="GET"){
        res.status(200).json({boas_vindas: "Seja bem-vindo a API"})
    }else{
        // Retorna a existência da página, mas o método de acesso não é permitido.
        res.status(405).json({boas_vindas: "Ola sua requisição não é GET", metodo})
    }
    res.status(200).json( {metodo: req.method} )
    
}
    