import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/ducks/favorites';
import Colors from '~/styles/colors';

const FavoriteButton = ({item}) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.find((fav) => fav.id === item.id);

  function favoriteToggle() {
    dispatch(isFavorite ? removeFavorite(item) : addFavorite(item));
  }

  return (
    <Ionicons
      name={isFavorite ? 'ios-star' : 'ios-star-outline'}
      size={26}
      color={isFavorite ? Colors.isFavorite : Colors.inative}
      onPress={() => favoriteToggle()}
    />
  );
};

export default FavoriteButton;
