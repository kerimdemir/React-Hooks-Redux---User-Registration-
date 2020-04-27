import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from "../themes";

const Loading = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.activityIndicator} size="large" color={'gray'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityIndicator: {
    backgroundColor:Colors.CARD_BACKGROUND,
    padding:20
  },
});
export default Loading;
