export interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
 
const CharacterDetail: React.FC<CharacterProps> = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
}) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-5 rounded-lg shadow-lg">
      <div className="flex items-center">
        <img className="w-32 h-32 rounded-full mr-4" src={image} alt={name} />
        <div>
          <h2 className="text-2xl font-bold  text-red-900">{name}</h2>
          <p className="text-gray-600">ID: {id}</p>
          <p className="text-gray-600">Status: {status}</p>
          <p className="text-gray-600">Species: {species}</p>
          <p className="text-gray-600">Type: {type}</p>
          <p className="text-gray-600">Gender: {gender}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold  text-red-900">Origin</h3>
        <p className="text-gray-600">{origin.name}</p>
        <a className="text-blue-500" href={origin.url} target="_blank" rel="noopener noreferrer">
          View Origin
        </a>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold  text-red-900">Location</h3>
        <p className="text-gray-600">{location.name}</p>
        <a className="text-blue-500" href={location.url} target="_blank" rel="noopener noreferrer">
          View Location
        </a>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold  text-red-900">Episodes</h3>
        <ul className="list-disc list-inside">
          {episode.map((ep, index) => (
            <li key={index}>
              <a className="text-blue-500" href={ep} target="_blank" rel="noopener noreferrer">
                Episode {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">Created: {new Date(created).toLocaleDateString()}</p>
        <a className="text-blue-500" href={url} target="_blank" rel="noopener noreferrer">
          View Character
        </a>
      </div>
    </div>
  );
};

export default CharacterDetail