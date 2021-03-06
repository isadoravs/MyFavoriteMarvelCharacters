import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet} from 'react-native';
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
      style={styles.favoriteIcon}
      size={26}
      color={isFavorite ? Colors.isFavorite : Colors.inative}
      onPress={() => favoriteToggle()}
    />
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  favoriteIcon: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
});
