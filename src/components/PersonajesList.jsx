import { useEffect, useState } from "react"
import Personaje from "./Personaje"


//COMPONENTE DE LA BARRA DE NAVEGACION
function NavPage(props){
    return(
        <header className="d-flex justify-content-between align-items-center">
            <p>Page :{props.page}</p>
            <button className="btn btn-primary btn-sm"
            onClick={() => props.setpage(props.page + 1)}
            >
                Page {props.page + 1}
            </button> 
        </header>
    )
}

//COMPONENTE DE LA LISTA DE LOS PESONAJES
function PersonajesList() {
    const [personajes, setpersonajes] = useState([])
    const [loading, setloading] = useState(true)
//STATE DE LAS PAGINAS
    const [page, setpage] = useState(1)

//HOOK USE EFFECT
    useEffect(() => {
        //CONSUMIR API CON FETCH
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json()
            setloading(false)
            setpersonajes(data.results);
        }

        fetchData();
    }, [page])

    return (
        <div className="container">

            {/* LLAMAMOS AL COMPONENTE DE LA BARRA DE NAVEGACION */}
            <NavPage page={page} setpage={setpage}/>

            {/* IF DE UN LOADING */}
            {loading ? <h1>Loading...</h1> :
                <div className="row">
                    {
                        //LE HACE EL MAP A EL ARRAY DE LA API
                        personajes.map(personaje => {
                            return (
                                <div className="col-md-4" key={personaje.id}>
                                    <Personaje key={personaje.id} personaje={personaje} />
                                </div>
                            )
                        })
                    }
                </div>
            }

            <NavPage page={page} setpage={setpage}/>

        </div>
    )
}

export default PersonajesList