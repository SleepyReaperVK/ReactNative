import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import {RoundedButton} from '../Components/RoundButten';
import { spacing } from '../utils/sizes'

// display Main Page 
export const Focus = ({addSubject}) => {
  const [subject,setSubject]=useState(null)
  return(
    console.log(subject),
  <View style={styles.inputContainer}>
    <TextInput style={styles.textInput} label="Focuse on..."  onChangeText={setSubject} />
     <View style={styles.button}>
     <RoundedButton  title="+" size={50} onPress={()=> addSubject(subject)}/>
    </View>
  </View>
)};

const styles = StyleSheet.create({
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button:{
    justifyContent:'center',
  },
});
