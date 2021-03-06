import React from 'react';
import {Share, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Snackbar from 'react-native-snackbar';

import Colors from '~/styles/colors';

const ShareButton = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const nameList = favorites.map((fav) => ` ${fav.name}`);
  const onShare = async () => {
    try {
      await Share.share({
        message: nameList.toString(),
      });
    } catch (error) {
      Snackbar.show({
        text: error.message,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };
  return (
    <Ionicons
      name="md-share"
      style={styles.shareIcon}
      size={26}
      onPress={onShare}
      color={Colors.icons}
    />
  );
};

export default ShareButton;

const styles = StyleSheet.create({
  shareIcon: {
    marginEnd: 12,
  },
});
