import Container from "../layout/Container";
import pikachu from '../assets/pikachuHi.gif'

export default function Home() {
  return (
    <Container>
      <div className="pb-1">
        <h1 className="text-zinc-900 text-xl md:text-3xl">
          Bienvenido maestro pokemón
        </h1>
      </div>
      <div>
        <img className="h-full w-80"
         src={pikachu}
        />
      </div>
    </Container>


  )
}