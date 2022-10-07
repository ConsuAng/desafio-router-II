import Container from "../layout/Container";

export default function Home() {
  return (
    <Container>
      <div className="pb-9">
        <h1 className="text-zinc-900 text-xl md:text-3xl">
          Bienvenido maestro pokemón
        </h1>
      </div>
      <div>
        <img className="h-full w-80"
          src="https://media.tenor.com/NHtWKY2mAZ0AAAAC/pokemon-hello.gif"
        />
      </div>
    </Container>


  )
}