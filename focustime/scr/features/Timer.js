import React, { useState } from 'react';
import { View, Text, StyleSheet , Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar,  } from 'react-native-paper';
import { Countdown } from '../Components/CountDown';
import { RoundedButton } from '../Components/RoundButten';
import { spacing } from '../utils/sizes';
import {colors} from '../utils/colors';
import {Timing} from './Timing';
// display Timer Page
export const Timer = ({ focusSubject , clearSubject , onTimerEnd}) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress,setProgress] = useState(1)
  const [minutes,setMinutes] = useState(0.1)
  //^(value)=>setProgress(value)^

const onEnd=(resetTime)=>{
  Vibration.vibrate(PATTERN);
  setIsStarted(false);
  setProgress(0);
  resetTime();
  onTimerEnd(focusSubject);

}
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
        </View> 
      </View>
      <ProgressBar progress={progress}  style={{height:spacing.sm , backgroundColor :'darkgray'}} color={colors.white} />
      <Timing onChangeTime={setMinutes} currentMin={minutes}/>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start"  onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="stop" style={{adjustsFontSizeToFit:'true'}} onPress={() => setIsStarted(false)} />
        )}
      </View>
       <View style={styles.buttonWrapper}>
       <RoundedButton  title="back"  onPress={clearSubject} />
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{ color:colors.white , fontWeight:"bold", textAlign:'center'},
  task:{color:colors.white,textAlign:'center'},

});

//Vibration logi
const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    0.1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    0.1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    0.1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];
