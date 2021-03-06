import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '~/styles/colors';

const EmptyContainer = ({message, iconName}) => (
  <View style={styles.container}>
    <Ionicons name={iconName} size={40} color={Colors.black} />
    <Text style={styles.message}>{message}</Text>
  </View>
);

export default EmptyContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  message: {
    fontSize: 16,
    color: Colors.placeholder,
  },
});
