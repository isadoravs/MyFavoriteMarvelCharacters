import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FavoriteButton from '~/components/favoriteButton';
import Colors from '~/styles/colors';
import {useNavigation} from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;

const DetailsScreen = ({route}) => {
  const {item} = route.params;
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <View style={styles.header}>
          <FavoriteButton item={item} />
        </View>
      ),
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.thumbnail}
          source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
          resizeMethod={'scale'}
        />
        <View style={styles.body}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.background,
  },
  thumbnail: {
    width: deviceWidth,
    height: deviceWidth,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 10,
    color: Colors.title,
  },
  body: {
    fontSize: 14,
    padding: 10,
    paddingTop: 15,
  },
  header: {
    padding: 12,
  },
  description: {
    paddingTop: 10,
    color: Colors.title,
  },
});
