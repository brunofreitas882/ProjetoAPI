import { useRouter } from "next/router"


export default function Buscar(){
    const router = useRouter()
    const codigo = router.query.id
    const name = router.query.buscar
    console.log(router)
    return<>
    <div>
        <h1>Rotas / id / buscar</h1>
        <h1>codigo: {codigo}</h1>
        <h1>nome: {name} </h1>
        <link href="/rotas/id/buscar">Está pagina</link>
    </div>
</>
}