import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

import Container from '../layout/Container';

export default function Detail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  async function pokeInfo() {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const { data } = await res;
      const stats = data.stats.map(({ base_stat, stat }) => {
        return { base: base_stat, name: stat.name }
      });
      const image = data.sprites.other.dream_world.front_default;
      const types = data.types.map((type) => { return type.type.name }).join(" ");
      const info = { image, stats, types };
      setPokemon(info); 

    } catch (error) {
      alert("Error al obtener los datos");
    }
  };

  useEffect(() => {
    pokeInfo();
  }, [name]);

  return (
    <Container>
      <div className='border-[1px] border-zinc-400 rounded-md py-2 px-8 mt-1 mb-1 flex flex-col justify-center items-center md:flex-row'>
        <img src={pokemon.image} className="max-h-[295px] md:max-h-full" />
        <div className="pt-3 md:pl-9">
          <h2 className="text-zinc-900 text-2xl pb-3 md:text-3xl">{name}</h2>
          <ul className="list-disc text-zinc-600 pl-5 text-base md:text-xl">
            {pokemon.stats?.map((info, i) => (
              <li key={i}>{info.name}: {info.base}</li>
            ))}
          </ul>
          <p className="text-zinc-500 pt-3 md:text-lg">{pokemon.types}</p>
        </div>
      </div>
    </Container>
  )
}