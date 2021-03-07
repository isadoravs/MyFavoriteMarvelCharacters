import {StyleSheet, Dimensions} from 'react-native';
import Colors from '~/styles/colors';

const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
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
