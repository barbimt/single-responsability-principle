import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import CharacterCardComponent from './characterCard.component';

export type CharactersComponentProps = {
  ids: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({ ids }: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids });

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];

  return (
    <div className={'characters'}>
      {charactersArray.map((character) => (
        <CharacterCardComponent character={character} />
      ))}
    </div>
  );
};

export default CharactersComponent;
