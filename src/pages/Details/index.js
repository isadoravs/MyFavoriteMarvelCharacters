import React, {useEffect} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FavoriteButton from '~/components/favoriteButton';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

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
