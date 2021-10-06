import React, {useState, useEffect} from 'react';
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
import StarRating from 'react-native-star-rating';

const MyOrders = ({navigation}) => {
  const [restau, setRestau] = useState({
    name: 'Minute by tuk tuk',
    image: require('../../../assets/images/hamburger.jpeg'),
    rating: 4.5,
    ratingsNumber: 125,
    foodType: 'Western Food',
    type: 'Café',
    location: '2 cité El Wifek, La Marsa',
  });
  const [orderItems, setOrderItems] = useState([
    {
      name: 'Beef Burger',
      itemsNumber: 3,
      price: 5.2,
    },
    {
      name: 'Classic Burger',
      itemsNumber: 1,
      price: 5.2,
    },
    {
      name: 'Cheese Chicken Burger',
      itemsNumber: 3,
      price: 5.2,
    },
    {
      name: 'Cheese Legs Basket',
      itemsNumber: 1,
      price: 5.2,
    },
    {
      name: 'Beef Burger',
      itemsNumber: 3,
      price: 5.2,
    },
  ]);
  const [total, setTotal]= useState(0)
  useEffect(() => {
    setTotal(0);
    let somme = 0
    if(orderItems!==null && orderItems.length > 0){
     for(let i = 0; i < orderItems.length; i++){
        somme+= orderItems[i].itemsNumber * orderItems[i].price;
     }
     setTotal(somme)
    }
  }, [])
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
          <Text>My Orders</Text>
        </Text>
        <Text style={styles.cart}>
          <Icon size={27} name="shopping-cart" />
        </Text>
      </View>
      <View style={styles.orderRestau}>
        <Image style={styles.restauImage} source={restau.image}></Image>
        <View style={styles.infos}>
          <Text style={styles.restauName}>{restau.name}</Text>
          <View style={styles.restauRating}>
            <StarRating
              fullStarColor={'#FC6011'}
              starStyle={{borderColor: '#FC6011'}}
              disabled={false}
              maxStars={1}
              rating={restau.rating / 5}
              starSize={18}
            />
            <Text style={styles.rating}>{restau.rating}</Text>
            <Text style={styles.restaurant}>
              ({restau.ratingsNumber} ratings)
            </Text>
          </View>
          <View style={styles.restauRating}>
            <Text style={styles.type}>{restau.type}</Text>
            <Text style={styles.dot}>-</Text>
            <Text style={styles.nameFoodType}>{restau.foodType}</Text>
          </View>
          <View style={styles.restauRating}>
            <Text style={styles.localIcon}>
              <Icon
                size={18}
                name="location"
                color={'#FC6011'}
                type="ionicon"
              />
            </Text>
            <Text style={styles.location}>{restau.location}</Text>
          </View>
        </View>
      </View>
      <View style={styles.orderItems}>
      <View style={styles.line}/>
        {orderItems.map(orderItem => {
          return (
            <View key={orderItems.indexOf(orderItem)}>
              <View style={styles.orderItem}>
                <View style={styles.orderItem2}>
                  <Text style={styles.foodName}>{orderItem.name}</Text>
                  <Text style={styles.multip}>x</Text>
                  <Text style={styles.foodItemsNumber}>
                    {orderItem.itemsNumber}
                  </Text>
                </View>

                <Text style={styles.foodPrice}>
                  ${(orderItem.price * orderItem.itemsNumber).toFixed(2)}
                </Text>
              </View>
              <View style={styles.line}/>
            </View>
          );
        })}
      </View>
      <View style={styles.tot}>
      <View style={styles.subTotal}>
        <Text style={styles.subTotalName}>Sub Total</Text>
        <Text style={styles.subTotalValue} >${total.toFixed(2)}</Text>
      </View>
      <View style={styles.subTotal}>
        <Text style={styles.subTotalName}>Delivery Cost</Text>
        <Text style={styles.subTotalValue} >$4</Text>
      </View>
      <View style={styles.line}/>
      <View style={styles.subTotal}>
        <Text style={styles.totalName}>Total</Text>
        <Text style={styles.total} >${(total + 4).toFixed(2)}</Text>
      </View>

      </View>
      <TouchableHighlight underlayColor={'transparent'} onPress={() => navigation.navigate('Checkout', {
                              total: total,
                            })} style={styles.addCardModal}>
        <Text style={styles.checkout}>Checkout</Text>
      </TouchableHighlight>
      
      
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginTop: 15,
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
    marginTop: 7,
    marginLeft: -40,
  },
  backIcon: {
    marginTop: 4,
    marginLeft: 5,
    width: 50,
    height: 50,
  },
  orderRestau: {
    flexDirection: 'row',
    margin: 20,
    marginLeft: 30,
  },
  restauImage: {
    width: 87,
    height: 87,
    borderRadius: 15,
  },
  infos: {
    marginLeft: 20,
  },
  restauName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3E3F3FDE',
  },
  restauRating: {
    flexDirection: 'row',
  },
  rating: {
    color: '#FC6011',
    marginLeft: 3,
    fontSize: 14,
    marginTop: -2,
  },
  restaurant: {
    color: '#B6B7B7',
    fontSize: 13,
    marginLeft: 3,
    marginTop: -2,
  },
  type: {
    color: '#B6B7B7',
    fontSize: 13,
    marginLeft: 5,
  },
  dot: {
    color: '#FC6011',
    fontSize: 13,
    marginLeft: 5,
  },
  nameFoodType: {
    color: '#B6B7B7',
    fontSize: 13,
    marginLeft: 5,
  },
  location: {
    color: '#B6B7B7',
    fontSize: 13,
  },
  orderItems: {
    backgroundColor: '#E8E9E9',
    marginTop: 20,
    width: '100%',
  },
  orderItem: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop:15,
    marginBottom:15
  },
  orderItem2:{
    flexDirection: 'row',
    width:'80%'
  },
  foodName: {
    fontSize: 15,
    color: '#3E3F3FDE',

  },
  multip: {
    marginLeft: 5,
    color: '#3E3F3FDE',
    fontSize: 15,
  },
  foodItemsNumber: {
    marginLeft: 5,
    color: '#3E3F3FDE',
    fontSize: 15,
  },
  foodPrice: {
    marginLeft: '5%',
    fontWeight: 'bold',
    color: '#3E3F3FDE',
  },
  line: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1.5,
    
  },
  tot:{
    margin:20,

  },
  subTotal:{
    flexDirection: 'row',
    marginTop:10,
    marginBottom:10
  },
  subTotalName: {
    fontSize: 15,
    color: '#2B2C2CDE',
    fontWeight: 'bold',
    width:'80%',
    marginLeft:10
  },
  subTotalValue: {
    color: '#FC6011',
    fontWeight: 'bold',
    fontSize: 15,
  },
  totalName: {
    fontSize: 15,
    color: '#2B2C2CDE',
    fontWeight: 'bold',
    width:'80%',
    marginLeft:10,
    marginTop:10,
  },
  total:{
    color: '#FC6011',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop:7,
  },
  addCardModal: {
    width: '80%',
    height: 60,
    backgroundColor: '#FC6011',
    borderRadius: 30,
    marginLeft:40
  },
  checkout:{
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold',
    marginTop:12
  }
});
export default MyOrders;
