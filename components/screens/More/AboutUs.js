import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  Modal,
  Image,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
const AboutUs = ({navigation}) => {
  return (
    <ScrollView vertical={true} style={styles.container}>
      <View style={styles.title}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => navigation.navigate('More')}
          style={styles.backIcon}>
          <Icon
            size={33}
            color={'#2B2B2CC9'}
            name="chevron-back"
            type="ionicon"></Icon>
        </TouchableHighlight>
        <Text style={styles.greeting}>
          <Text> About Us</Text>
        </Text>
        <Text style={styles.cart}>
          <Icon size={27} name="shopping-cart" />
        </Text>
      </View>
      <View style={styles.about}>
        <View style={styles.aboutOne}>
          <View style={styles.bullet} />
          <Text style={styles.textAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={styles.aboutOne}>
          <View style={styles.bullet} />
          <Text style={styles.textAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={styles.aboutOne}>
          <View style={styles.bullet} />
          <Text style={styles.textAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginTop: 20,
    height: 600,
    marginBottom: 30
  },
  title: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  greeting: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
    width: 330,
  },
  cart: {
    marginTop: 5,
    marginLeft: -40,
  },
  backIcon: {
    marginTop: 4,
    marginLeft: 5,
    width: 50,
    height: 50,
  },
  about: {
    marginTop: 30,
    margin: 20,
  },
  aboutOne: {
    flexDirection: 'row',
    marginTop:30,
  },
  bullet: {
    width: 10,
    height: 10,
    backgroundColor: '#FC6011',
    borderColor: '#FC6011',
    borderRadius: 5,
    marginLeft: 15,
  },
  textAbout:{
      marginTop:-8,
      marginLeft: 10,
      marginRight: 25,
      lineHeight:22,
      color: '#5E5F5F',
  }
});
export default AboutUs;
