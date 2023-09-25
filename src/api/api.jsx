import { useEffect, useState } from 'react'
import Card from '../componentes/cards/Card'

function Musica() {

    const [ musicas, setmusicas ] = useState([])

    useEffect(() => {
        const buscarmusicas = async () => {
            const response = await fetch('https://raw.githubusercontent.com/yurisouza1/apimusica/main/musica.json')
            const data = await response.json()
            setmusicas(data)
            console.log(data)
        }
        buscarmusicas()
    }, [])

    return (
        <>
          <section>
            {musicas.length > 0 ? (
              <section className="api">
                {musicas.map((musicas) => (
                  <Card
                    spcapa={musicas.São_Paulo.capa}
                    sptitulo={musicas.São_Paulo.titulo}
                    spartista={musicas.São_Paulo.artista}
                  />
                ))}
              </section>
            ) : (
              <p>Carregando...</p>
            )}
          </section>
        </>
      );
    }
    
    export default Musica;