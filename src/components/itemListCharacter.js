import React, {memo} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import FavoriteButton from './favoriteButton';
import Colors from '~/styles/colors';
import {useNavigation} from '@react-navigation/native';

const ItemListCharacter = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', {item: item})}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: `${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`,
          }}
        />
        <Text numberOfLines={1} style={styles.title}>
          {item.name}
        </Text>
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
    padding: 5,
    paddingEnd: 10,
    marginVertical: 1,
    marginHorizontal: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 6,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    color: Colors.title,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
});
