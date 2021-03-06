import React, {memo} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FavoriteButton from './favoriteButton';
import Colors from '~/styles/colors';

const ItemListCharacter = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {item})}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: `${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`,
          }}
        />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
      <FavoriteButton item={item} />
    </View>
  );
};

export default memo(ItemListCharacter);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.darkgray,
    padding: 8,
    paddingEnd: 10,
    marginVertical: 1,
    marginHorizontal: 1,
    alignItems: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 6,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    color: Colors.title,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  favoriteIcon: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
});
