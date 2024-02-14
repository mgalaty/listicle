import React, {useState} from 'react';
 import {
  SafeAreaView,
} from 'react-native';
/*
 import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
*/
import { Chair as BlackChair } from './Chair';
import Table from './Table'; 

import * as greetings from './helpers';
import Splash from './src/screens/auth/Splash';

function App(): React.JSX.Element {
  console.log('greetings.hello :>> ',greetings.hello);
  console.log('greetings.hola :>> ',greetings.hola);
  const [theme,setTheme] = useState('light')
  return (
        <SafeAreaView>

          <Splash />
          
          {/* 
          <Text style={{margin: 16, fontSize: 16}} onPress={() => setTheme('dark')}>Make Theme Dark</Text>
          <Text style={styles.themeHeader} onPress={() => setTheme('light')}>Make Theme light</Text>
          <View>

          {/* Chair *}
          <BlackChair theme={theme}/>

          {/* Table *}
          <Table />

          </View>
           */}

        </SafeAreaView>
  );
}

/*
const styles = StyleSheet.create({
  themeHeader: {margin: 16, fontSize: 16, backgroundColor: 'yellow'}
})
 */

export default App;