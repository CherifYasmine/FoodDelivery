import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';

const Desserts = ({route, navigation}) => {
  const {name} = route.params;
  const [food, setFood] = useState([
    {
      name: 'French Apple Pie',
      image: require('../../../assets/images/hamburger.jpeg'),
      restaurant: 'Minute by tuk tuk',
      rating: 3.5,
    },
    {
      name: 'French Apple Pie',
      image: require('../../../assets/images/hamburger.jpeg'),
      restaurant: 'Minute by tuk tuk',
      rating: 3.5,
    },
    {
      name: 'French Apple Pie',
      image: require('../../../assets/images/hamburger.jpeg'),
      restaurant: 'Minute by tuk tuk',
      rating: 3.5,
    },
    {
      name: 'French Apple Pie',
      image: require('../../../assets/images/hamburger.jpeg'),
      restaurant: 'Minute by tuk tuk',
      rating: 3.5,
    },
    {
      name: 'French Apple Pie',
      image: require('../../../assets/images/hamburger.jpeg'),
      restaurant: 'Minute by tuk tuk',
      rating: 3.5,
    },
  ]);
  return (
    <ScrollView vertical={true} style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate('Tabs')}
        style={styles.backIcon}>
        <Icon
          size={33}
          color={'#2B2B2CC9'}
          name="chevron-back"
          type="ionicon"></Icon>
      </TouchableHighlight>
      <View onPress={() => navigation.navigate('Tabs')} style={styles.title}>
        <Text style={styles.greeting}>
          <Text> {name}</Text>
        </Text>
        <Text style={styles.cart}>
          <Icon size={27} name="shopping-cart" />
        </Text>
      </View>
      <View style={styles.inputSearchAll}>
        <Text style={styles.searchIcon}>
          <Icon color="#707174C9" size={20} name="search" />
        </Text>
        <TextInput
          style={styles.inputSearch}
          placeholderTextColor="#707174C9"
          placeholder="Search Food"
        />
      </View>
      <View style={styles.items}>
        {food.map(item => {
          return (
            <View key={food.indexOf(item)}>
              <Image style={styles.itemImage} source={item.image}></Image>
              <View style={styles.itemInfos}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 600,
  },
  title: {
    flexDirection: 'row',
    marginTop: -53,
    marginLeft: 30,
  },
  greeting: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 25,
    width: 330,
  },
  cart: {
    marginTop: 5,
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
  backIcon: {
    marginTop: 30,
    marginLeft: 10,
    width: 50,
    height: 50,
  },
  items: {
    marginTop: 30,
  },
  itemImage: {
    height: 200,
    width: '100%',
  },
  itemInfos:{
      marginTop: -70,
      marginBottom:60
  },
  itemName:{
      color:'white',
      marginLeft:20,
  }
});
export default Desserts;
