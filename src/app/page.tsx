import Card from "@/components/Card";
import SearchBox from "@/components/SearchBox";
import { SearchParams } from "next/dist/server/request/search-params";
import api from "./utils/api";

export default async function Home({ searchParams }: {searchParams: SearchParams}) {
  const { search } = await searchParams;

  const {data } = await api.get('character');
  const personagens = data.results;
  return (
    <>
      <SearchBox search={ search as string} />

      <div className="flex gap-2 flex-row flex-wrap">
        {personagens.map((personagem: any) => (
          <Card
            key={personagem.id}
            id={personagem.id}
            name={personagem.name}
            status={personagem.status}
            species={personagem.species}
            type={personagem.type}
            gender={personagem.gender}
            origin={personagem.origin}
            image={personagem.image}
            location={personagem.location}
          />
        ))}
      </div>
    </>
  );
}