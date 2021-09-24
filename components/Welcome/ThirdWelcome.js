import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableHighlight,
} from 'react-native';

const ThirdWelcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.findFoodYouLoveImg}
        source={require('../../assets/images/liveTracking.png')}></Image>
        {/* <Icon size={20} name='primitive-dot'></Icon> */}
      <Text style={styles.findFoodYouLoveTxt}>Live Tracking</Text>
      <Text style={styles.txt}>
            Real time tracking of the food on your app once you packed the order.
      </Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('Home')}
        style={styles.next}>
        <Text style={styles.nextTxt}>Next</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 120,
  },
  findFoodYouLoveImg: {
    width: 400,
    height: 400,
    marginLeft:20
  },
  findFoodYouLoveTxt: {
    fontSize: 25,
    color: '#4A4B4D',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
  },
  txt: {
    color: '#B6B7B7',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  next: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    backgroundColor: '#FC6011',
    marginTop: 20,
    fontWeight: 'bold',
    width: 200,
    height: 50,
    marginLeft: 100,
    borderRadius:200/2
  },
  nextTxt: {
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default ThirdWelcome;
