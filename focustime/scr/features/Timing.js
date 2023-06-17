import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../Components/RoundButten';

export const Timing = ({ onChangeTime, currentMin }) => {
  return (
    <View style={styles.timingButtons}>
      <RoundedButton
        size={50}
        title="+"
        onPress={() => onChangeTime(currentMin + 1)}
      />
      <RoundedButton size={50} title="25" onPress={() => onChangeTime(25)} />
      <RoundedButton size={50} title="20" onPress={() => onChangeTime(20)} />
      <RoundedButton size={50} title="15" onPress={() => onChangeTime(15)} />
      <RoundedButton size={50} title="10" onPress={() => onChangeTime(10)} />
      {currentMin <= 1 ? (
        <RoundedButton size={50} title="-" onPress={() => onChangeTime(0)} />
      ) : (
        <RoundedButton
          size={50}
          title="-"
          onPress={() => onChangeTime(currentMin - 1)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  timingButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
