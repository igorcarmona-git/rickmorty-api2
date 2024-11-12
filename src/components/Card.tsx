import Link from "next/link";

interface Origin {
    name: string;
    url: string;
  }
  
  interface Location {
    name: string;
    url: string;
  }
  
  interface CardProps {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
  }
  
  const Card: React.FC<CardProps> = ({ id, name, status, species, type, gender, origin, location, image }) => {
    return (
      <Link href={`/personagem/${id}`} className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white hover:bg-gray-200">
        <img className="shadow shadow-red-900 h-72 w-72 mx-auto" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-red-900">{name}</div>
          <p className="text-gray-700 text-base">Status: {status}</p>
          <p className="text-gray-700 text-base">Species: {species}</p>
          <p className="text-gray-700 text-base">Type: {type}</p>
          <p className="text-gray-700 text-base">Gender: {gender}</p>
          <p className="text-gray-700 text-base">Origin: {origin.name}</p>
          <p className="text-gray-700 text-base">Location: {location.name}</p>
        </div>
      </Link>
    );
  };
  
  export default Card;