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
import StarRating from 'react-native-star-rating';

const MenuItems = ({route, navigation}) => {
  const {name} = route.params;
  const [food, setFood] = useState([
    {
      name: 'French Apple Pie',
      image: require('../../../assets/images/hamburger.jpeg'),
      restaurant: 'Minute by tuk tuk',
      rating: 3.5,
    },
    {
      name: 'Dark Chocolate Cake',
      image: require('../../../assets/images/hamburger.jpeg'),
      restaurant: 'Cakes By Tella',
      rating: 4.7,
    },
    {
      name: 'Street Shake',
      image: require('../../../assets/images/hamburger.jpeg'),
      restaurant: 'Café Racer',
      rating: 3.5,
    },
    {
      name: 'Fudgy Chewy Browies',
      image: require('../../../assets/images/hamburger.jpeg'),
      restaurant: 'Minute by tuk tuk',
      rating: 4.5,
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
      <View style={styles.title}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => navigation.navigate('Tabs')}
          style={styles.backIcon}>
          <Icon
            size={33}
            color={'#2B2B2CC9'}
            name="chevron-back"
            type="ionicon"></Icon>
        </TouchableHighlight>
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
            <TouchableHighlight key={food.indexOf(item)} underlayColor={'transparent'}
            onPress={() => navigation.navigate('FoodItem')}>
              <View style={styles.singleItem} >
                <Image style={styles.itemImage} source={item.image}></Image>
                <View style={styles.itemInfos}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <View style={styles.itemMore}>
                    <StarRating
                      fullStarColor={'#FC6011'}
                      starStyle={{borderColor: '#FC6011'}}
                      disabled={false}
                      maxStars={1}
                      rating={item.rating / 5}
                      starSize={21}
                    />
                    <Text style={styles.rating}>{item.rating}</Text>
                    <Text style={styles.restaurant}>{item.restaurant}</Text>
                    <Text style={styles.dot}>-</Text>
                    <Text style={styles.nameFoodType}>{name}</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
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
    marginTop: 4,
    marginLeft: 10,
    width: 50,
    height: 50,
  },
  items: {
    marginTop: 70,
  },
  singleItem: {
    marginTop: -30,
  },
  itemImage: {
    height: 200,
    width: '100%',
  },
  itemInfos: {
    marginTop: -70,
    marginBottom: 60,
    marginLeft: 20,
  },
  itemName: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  itemMore: {
    flexDirection: 'row',
    marginTop: 5,
  },
  rating: {
    color: '#FC6011',
    marginLeft: 3,
    fontSize: 14,
  },
  restaurant: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  dot: {
    color: '#FC6011',
    fontSize: 14,
    marginLeft: 5,
  },
  nameFoodType: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
});
export default MenuItems;
