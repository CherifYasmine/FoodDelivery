import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const FirstWelcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.findFoodYouLoveImg}
        source={require('../../assets/images/findFoodYouLove.png')}></Image>
        {/* <Icon size={20} name='primitive-dot'></Icon> */}
      <Text style={styles.findFoodYouLoveTxt}>Find Food You Love</Text>
      <Text style={styles.txt}>
        Discover the best foods from over 1.000 restaurants and fast delivery to
        your doorstep
      </Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('SecondWelcome')}
        style={styles.next}>
        <Text style={styles.nextTxt}>Next</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  findFoodYouLoveImg: {
    width: 400,
    height: 400,
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
export default FirstWelcome;
