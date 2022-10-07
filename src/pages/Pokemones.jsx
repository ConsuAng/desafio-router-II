import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Container from "../layout/Container";
import Loader from "../layout/Loader";

export default function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  async function getPokemones() {
    try {
      const res = await axios.get(url);
      const { data } = await res;
      const pokeData = data.results;
      setPokemones(pokeData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Error al obtener los datos");
    }
  }

  useEffect(() => {
    getPokemones();
  }, []);

  const goToPokemon = () => {
    if (selected === "" || selected === "Pokemones") {
      alert("Debes elegir un pokemón");
      return
    }
    navigate(`/pokemones/${selected}`);
  }

  return (
    <Container>
      {loading ? <Loader /> :
        <>
          <div className="pb-8">
            <h1 className="text-3xl text-zinc-900">Selecciona un pokemon</h1>
          </div>
          <select value={selected} onChange={({ target }) => setSelected(target.value)} placeholder="Pokemones"
            className="border-[1px] border-zinc-400 rounded-md py-2 px-8 text-zinc-900">
            <option>Pokemones</option>
            {pokemones.map((pokemon, i) => (
              <option key={i}>{pokemon.name}</option>
            ))}
          </select>
          <div className="pt-7">
            <button onClick={goToPokemon}
              className="text-white bg-zinc-900 px-4 py-2 rounded-md"
            >
              Ver Detalle
            </button>
          </div>
        </>

      }
    </Container>
  )
}