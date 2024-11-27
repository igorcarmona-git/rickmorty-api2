import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import api from "./utils/api";
import Image from "next/image";

type Character = {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
};

export default async function Home({ searchParams }: {
  searchParams: { search?: string; page?: string };
}) {
  const search = searchParams.search || ""; // Valor do parâmetro de pesquisa
  const page = Number(searchParams.page) || 1; // Página atual (valor padrão: 1)

  // Busca de personagens da API com paginação
  const { data } = await api.get(`character?page=${page}`);
  const personagens = data.results;
  const totalPages = data.info.pages;

  // Filtrar personagens com base na pesquisa
  const filteredPersonagens = personagens.filter((personagem: Character) =>
    personagem.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 space-y-6">
      {/* SearchBox */}
      <form method="get" action="/" className="flex items-center gap-4">
        <Input
          type="text"
          name="search"
          placeholder="Pesquise um personagem"
          defaultValue={search}
          className="w-full max-w-md"
        />
        <Button type="submit" className="px-6">
          Pesquisar
        </Button>
      </form>

      {/* Lista de Personagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPersonagens.map((personagem: any) => (
          <Link key={personagem.id} href={`/personagem/${personagem.id}`}>
            <Card className="hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle>{personagem.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <Image
                  src={personagem.image}
                  alt={personagem.name}
                  width={60}
                  height={60}
                  className="rounded-md shadow-md w-32 h-32 object-cover"
                />
                <p className="text-sm text-gray-600">{personagem.species}</p>
                <p className="text-sm text-gray-600">Status: {personagem.status}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center gap-4 mt-6">
        {page > 1 && (
          <Button
            as="a"
            href={`/?page=${page - 1}`}
            variant="outline"
          >
            Página Anterior
          </Button>
        )}
        {page < totalPages && (
          <Button
            as="a"
            href={`/?page=${page + 1}`}
            variant="outline"
          >
            Próxima Página
          </Button>
        )}
      </div>
    </div>
  );
}
