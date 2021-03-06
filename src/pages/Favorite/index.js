import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import ItemList from '~/components/itemListCharacter';
import EmptyContainer from '~/components/emptyContainer';
import Colors from '~/styles/colors';

const FavoriteScreen = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={favorites}
          renderItem={({item}) => <ItemList item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.containerStyle}
          ListEmptyComponent={() => (
            <EmptyContainer message="Não há favoritos" iconName="ios-star" />
          )}
          disableVirtualization
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerStyle: {
    flexGrow: 1,
  },
});
