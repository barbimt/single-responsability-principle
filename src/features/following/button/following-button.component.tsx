import { FC } from 'react';
import Character from '../../characters/characters.types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from 'features/following/following.slices';

type FollowingButtonProps = {
  character: Character;
};

const FollowingButtonComponent: FC<FollowingButtonProps> = ({
  character
}: FollowingButtonProps) => {
  //pasar logica a un hook
  const dispatch = useAppDispatch();
  const followingIds = useAppSelector((state) => state.following.followingIds);
  const isFav = followingIds.indexOf(character.id) >= 0;

  const onToggleFavorite = (setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(character.id));
    } else {
      dispatch(removeCharacterToFollowingList(character.id));
    }
  };

  const src = isFav ? '/images/star-filled.png' : '/images/star.png';
  const alt = isFav ? 'is_favorite' : 'is_not_favorite';

  return (
    <button className={'following-button'} onClick={() => onToggleFavorite(!isFav)}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default FollowingButtonComponent;
