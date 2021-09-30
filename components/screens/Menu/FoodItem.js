import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const FoodItem = () => {
  const [foodItem, setFoodItem] = useState({
    name: 'Tandootri Chicken Pizza',
    rating: 3.8,
    price: 750,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: require('../../../assets/images/hamburger.jpeg'),
  });
  const [portionNumber, setPortionNumber] = useState(1);

  return (
    <ScrollView vertical={true} style={styles.container}>
      <Image source={foodItem.image} style={styles.foodImage}></Image>
      <View style={styles.containerInfos}>
        <View style={styles.foodInfos}>
          <Text style={styles.foodName}>{foodItem.name}</Text>
          <View style={styles.foodMoreInfos}>
            <View style={styles.foodRating}>
              <StarRating
                fullStarColor={'#FC6011'}
                starStyle={{borderColor: '#FC6011'}}
                disabled={false}
                maxStars={5}
                rating={foodItem.rating}
                starSize={21}
              />
              <Text style={styles.textRating}>
                {foodItem.rating} Star Ratings
              </Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.foodItemPrice}>Rs. {foodItem.price}</Text>
              <Text style={styles.foodItemPriceText}>/ per Portion</Text>
            </View>
          </View>
          <Text style={styles.descText}>Description</Text>
          <Text style={styles.foodItemDesc}>{foodItem.description}</Text>
          <Text style={styles.descText}>Customise your Order</Text>
          <View style={styles.inputSearchAll}>
            <Text
              style={styles.inputSearch}
              // placeholderTextColor="#707174C9"
              // placeholder="Search Food"
            >
              - Select the size of Your Portion -
            </Text>
            <Text style={styles.searchIcon}>
              <Icon color="#49494BC9" size={15} name="chevron-down"></Icon>
            </Text>
          </View>
          <View style={styles.inputSearchAll}>
            <Text
              style={styles.inputSearch}
              // placeholderTextColor="#707174C9"
              // placeholder="Search Food"
            >
              - Select the Ingredients -
            </Text>
            <Text style={styles.searchIcon2}>
              <Icon color="#49494BC9" size={15} name="chevron-down"></Icon>
            </Text>
          </View>
          <View style={styles.portionNumber}>
            <Text style={styles.nbrPorText}>Number of Portions</Text>
            <TouchableHighlight
              onPress={() => setPortionNumber(portionNumber - 1)}
              style={styles.minusCont}>
              <Text style={styles.minus}>-</Text>
            </TouchableHighlight>
            <View style={styles.portionNumberCont}>
              <Text style={styles.portionNumbert}>{portionNumber}</Text>
            </View>
            <TouchableHighlight
              onPress={() => setPortionNumber(portionNumber + 1)}
              style={styles.plusCont}>
              <Text style={styles.plus}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.orangeAll}>
          <View style={styles.orange}></View>
          <View style={styles.white}>
            <Text style={styles.totalPrice}>Total Price</Text>
            <Text style={styles.lkr}>LKR 1500</Text>
            <TouchableHighlight style={styles.addToCart}>
              <View style={styles.addCart}>
                <Icon
                  style={styles.iconCart}
                  size={25}
                  name="shopping-cart"
                  color={'white'}></Icon>
                <Text style={styles.textCart}>Add to Cart</Text>
              </View>
            </TouchableHighlight>
          </View>
          <TouchableHighlight style={styles.cart}>
            <View style={{marginTop: 10, marginLeft: 10}}>
              <Icon size={26} name="shopping-cart" color={'#FC6011'}></Icon>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
  },
  foodImage: {
    width: '100%',
    height: 350,
  },
  containerInfos: {
    marginTop: -30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    //    marginLeft:20,
    //    marginRight:20,
    backgroundColor: 'white',
    height: 800,
  },
  foodInfos: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  foodRating: {
    width: 120,
    marginTop: 7,
  },
  textRating: {
    color: '#FC6011',
  },
  foodMoreInfos: {
    flexDirection: 'row',
    marginTop: 7,
  },
  foodItemPrice: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#535355',
  },
  foodItemPriceText: {
    color: '#B6B7B7',
    fontSize: 12,
    marginLeft: 25,
    marginTop: -5,
  },
  price: {
    marginLeft: 125,
  },
  descText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#535355',
    marginTop: 15,
  },
  foodItemDesc: {
    color: '#979999',
    marginTop: 7,
  },
  inputSearchAll: {
    backgroundColor: '#E8E9E9AF',
    marginTop: 20,
    color: '#C7CACA60',
    width: 350,
    marginLeft: 10,
    textAlign: 'center',
    flexDirection: 'row',
    height: 50,
    paddingLeft: 20,
    marginLeft: 10,
  },
  inputSearch: {
    backgroundColor: 'transparent',
    color: '#49494BC9',
    marginTop: 10,
  },
  searchIcon: {
    marginLeft: 80,
    marginTop: 13,
  },
  searchIcon2: {
    marginLeft: 140,
    marginTop: 13,
  },
  portionNumber: {
    flexDirection: 'row',
  },
  nbrPorText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#535355',
    marginTop: 15,
  },
  minusCont: {
    backgroundColor: '#FC6011',
    width: 50,
    height: 30,
    marginTop: 15,
    marginLeft: 25,
    borderRadius: 20,
  },
  minus: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
  },
  portionNumberCont: {
    width: 50,
    marginTop: 15,
    height: 30,
    marginTop: 15,
    marginLeft: 7,
    borderRadius: 20,
    borderColor: '#FC6011',
    borderWidth: 1.5,
  },
  portionNumbert: {
    fontSize: 17,
    textAlign: 'center',
  },
  plusCont: {
    backgroundColor: '#FC6011',
    width: 50,
    height: 30,
    marginTop: 15,
    marginLeft: 7,
    borderRadius: 20,
  },
  plus: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
  },
  orangeAll: {
    marginTop: 25,
    flexDirection: 'row',
  },
  orange: {
    backgroundColor: '#FC6011',
    width: '25%',
    height: 230,
    borderBottomRightRadius: 35,
    borderTopRightRadius: 35,
  },
  white: {
    height: 150,
    width: '75%',
    backgroundColor: 'white',
    marginTop: 40,
    marginLeft: -50,
    borderBottomLeftRadius: 35,
    borderTopLeftRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cart: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 7,
    backgroundColor: 'white',
    height: 50,
    width: 50,
    marginLeft: -20,
    marginTop: 90,
    borderRadius: 25,
  },
  totalPrice: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#535355',
    marginTop: 10,
  },
  lkr: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#535355',
  },
  addToCart: {
    backgroundColor: '#FC6011',
    width: 200,
    height: 40,
    marginLeft: 50,
    borderRadius: 100,
    marginTop:10
  },
  addCart: {
    flexDirection: 'row',
    marginLeft:10,
  },
  iconCart: {
    marginLeft: 20, 
    marginTop: 5
  },
  textCart:{
    color: 'white',
    marginTop: 5,
    marginLeft:20,
    fontWeight: 'bold',
    fontSize:16
  }
});
export default FoodItem;
