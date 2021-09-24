import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import First from './components/First'
import Nav from './Nav'

const App =()=>{
  return(
    <View style={styles.container}>
      <Nav/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'white'
  }
})
export default App;