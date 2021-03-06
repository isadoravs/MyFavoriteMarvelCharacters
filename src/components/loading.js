import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Colors from '~/styles/colors';

const Loading = ({loading}) => {
  if (!loading) {
    return null;
  }
  return (
    <View style={styles.loading}>
      <ActivityIndicator animating size="large" color={Colors.red} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    padding: 10,
  },
});
