import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Offers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.greeting}>Offers</Text>
        <Text style={styles.cart}>
          <Icon size={24} name="shopping-cart"></Icon>
        </Text>
      </View>
      <View style={styles.inputSearchAll}>
          <Text style={styles.searchIcon}>
            <Icon color="#707174C9" size={17} name="search"></Icon>
          </Text>
          <TextInput
            style={styles.inputSearch}
            placeholderTextColor="#707174C9"
            placeholder="Search Food"
          />
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginTop: 20,
    height: 600,
  },
  title: {
    flexDirection: 'row',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 25,
  },
  cart: {
    marginLeft: 280,
  },
  inputSearchAll: {
    backgroundColor: '#E8E9E9',
    marginTop: 30,
    color: '#B6B7B7E3',
    width: 350,
    borderRadius: 350 / 2,
    marginLeft: 20,
    textAlign: 'center',
    flexDirection: 'row',
    height: 50,
    paddingLeft: 20,
  },
  inputSearch: {
    backgroundColor: 'transparent',
  },
  searchIcon: {
    marginTop: 14,
    marginLeft: 20,
  },
  inputSearch: {
    marginLeft: 15,
  },
});
export default Offers;
