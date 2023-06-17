import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
export const FocusHistory = ({ historyArry }) => {
  if (!historyArry || !historyArry.length)
    return (
      <Text style={styles.title}>Complte a Focused Task to see history!</Text>
    );

  const renderItem = ({ item }) => <Text  style={styles.listItems}>{item}</Text>;

  return (
    <View style={styles.list} >
      <Text style={styles.title}>History of all Completed Focused Tasked</Text>
      <FlatList data={historyArry} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: '20',
    textAlign: 'center',
    color: colors.white,
  },
  list: {
    flex: 1,
  },
  listItems: {
    fontSize: '16',
    color: colors.white,
  },
});
