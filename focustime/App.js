import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { colors } from './scr/utils/colors.js';
import { Focus } from './scr/features/focus';
import { Timer } from './scr/features/Timer';
import {FocusHistory} from './scr/features/FocusHistory';
// App logic , setup the display diffrent pages
export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory historyArry={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          clearSubject={() => setCurrentSubject(null)}
          onTimerEnd={(subject) => {
            setHistory([...history,subject])
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
    // ...Platform.select({
    //   ios: {
    //     paddingTop: StatusBar.currentHeight,
    //     backgroundColor: 'red',
    //   },
    //   android: {
    //     paddingTop: StatusBar.currentHeight,
    //     backgroundColor: colors.darkBlue,
    //   },
    //   default: {
    //     // other platforms, web for example
    //     paddingTop: 100,
    //     backgroundColor: 'blue',
    //   },
    // }),
  },

  text: {
    color: colors.white,
  },
});
