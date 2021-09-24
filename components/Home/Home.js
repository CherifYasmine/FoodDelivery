import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.greeting}>Good Morning Yasmine!</Text>
        <Text style={styles.cart}>
          <Icon size={24} name="shopping-cart"></Icon>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    flexDirection:'row'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  cart: {
    marginLeft: 100,
  },
});
export default Home;
