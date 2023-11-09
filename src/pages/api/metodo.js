export default (req, res) => {
    if(req.method==="GET"){
        res.status(200).json({boas_vindas: "Seja bem-vindo a API"})
    }else{
        res.status(405).json({boas_vindas: "Ola sua requisição não é GET", metodo})
    }
    res.status(200).json( {metodo: req.method} )
    
}
    