import Character from './characters.types';
import { FC } from 'react';
import { Card } from 'features/card';
import CardBody from 'features/card/card-body.component';
import { FollowingButtonComponent } from 'features/following/button';

export type CharacterCardComponentProps = {
  character: Character;
};

const CharacterCardComponent: FC<CharacterCardComponentProps> = ({
  character
}: CharacterCardComponentProps) => (
  <Card key={character.id}>
    <Card.Image>
      <img src={character.image} alt={character.name} />
    </Card.Image>
    <CardBody>
      <span>{character.name}</span>
      <FollowingButtonComponent character={character} />
    </CardBody>
  </Card>
);

export default CharacterCardComponent;
