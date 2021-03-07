import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addQuery} from '~/store/ducks/search';
import Colors from '~/styles/colors';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const [value, setValue] = useState(query);

  useEffect(() => {
    const timeOutId = setTimeout(() => dispatch(addQuery(value)), 1000);
    return () => clearTimeout(timeOutId);
  }, [dispatch, value]);

  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.searchIcon}
        name="ios-search"
        color={Colors.placeholder}
        size={20}
      />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        placeholderTextColor={Colors.placeholder}
        onChangeText={(text) => setValue(text)}
        underlineColorAndroid="transparent"
        value={value}
      />
      <Ionicons
        style={styles.closeIcon(value)}
        name="ios-close"
        size={35}
        onPress={() => setValue('')}
      />
    </View>
  );
};

export default SearchContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.darkgray,
    padding: 4,
    marginBottom: 1,
  },
  searchIcon: {
    marginEnd: 11,
    marginStart: 11,
    color: Colors.placeholder,
  },
  closeIcon: (value) => ({
    marginEnd: 12,
    marginStart: 11,
    color: value !== '' ? Colors.icons : Colors.placeholder,
  }),
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    color: Colors.title,
  },
});
