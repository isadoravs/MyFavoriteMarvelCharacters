import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Snackbar from 'react-native-snackbar';
import {getPage} from '~/store/ducks/characters';
import ItemListCharacter from '~/components/itemListCharacter';
import Loading from '~/components/loading';
import EmptyContainer from '~/components/emptyContainer';
import Colors from '~/styles/colors';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const characters = useSelector((state) => state.characters.characters);
  const loading = useSelector((state) => state.characters.loading);
  const totalItems = useSelector((state) => state.characters.totalItems);
  const error = useSelector((state) => state.characters.error);
  const query = useSelector((state) => state.search.query);

  useEffect(() => {
    if (index !== 0) {
      nextPage();
    }
  }, [index, nextPage]);

  useEffect(() => {
    nextPage(true);
  }, [query, nextPage]);

  if (error) {
    Snackbar.show({
      text: error,
      duration: Snackbar.LENGTH_SHORT,
    });
  }

  const nextPage = useCallback(
    (reset) => {
      if (characters.length < totalItems || reset) {
        if (reset) {
          setIndex(0);
        }
        dispatch(getPage(query, index, reset));
      }
    },
    [characters.length, dispatch, index, query, totalItems],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {totalItems ? (
          <FlatList
            data={characters}
            renderItem={({item}) => <ItemListCharacter item={item} />}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={() => setIndex(index + 1)}
            onEndReachedThreshold={0.5}
            disableVirtualization
            contentContainerStyle={styles.containerStyle}
            ListFooterComponent={() => <Loading loading={loading} />}
          />
        ) : (
          <EmptyContainer
            message="A busca não retornou resultados"
            iconName="ios-search"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerStyle: {
    flexGrow: 1,
  },
});
