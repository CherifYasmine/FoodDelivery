import React, {useState}from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import StarRating from 'react-native-star-rating';

const Offers = ({navigation}) => {
  const [offers, setOffers] = useState([
    {
      name: 'Minute by tuk tuk',
      image: require('../../../assets/images/hamburger.jpeg'),
      rating: 4.5,
      ratingsNumber: 125,
      foodType: 'Western Food',
      type: 'Café',
    },
    {
      name: 'Café De Noir',
      image: require('../../../assets/images/hamburger.jpeg'),
      rating: 3.5,
      ratingsNumber: 125,
      foodType: 'Western Food',
      type: 'Restaurant',
    },
    {
      name: 'Bakes By Tella',
      image: require('../../../assets/images/hamburger.jpeg'),
      rating: 4.5,
      ratingsNumber: 125,
      foodType: 'Western Food',
      type: 'Café',
    },
    {
      name: 'Minute by tuk tuk',
      image: require('../../../assets/images/hamburger.jpeg'),
      rating: 4.5,
      ratingsNumber: 125,
      foodType: 'Western Food',
      type: 'Café',
    },
  ])
  return (
    <ScrollView vertical={true}style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.greeting}>Latest Offers</Text>
        <Text style={styles.cart}>
          <Icon size={24} name="shopping-cart"></Icon>
        </Text>
      </View>
      <Text style={styles.descOff}>Find discounts, offers, special meals and more!</Text>
      <TouchableHighlight style={styles.btnOffers} underlayColor={'transparent'}>
        <Text style={styles.txtOffers}>Check Offers</Text>
      </TouchableHighlight>
      <View style={styles.allOffers}> 
        {offers.map((o=>{
          return(
            <TouchableHighlight
                    underlayColor={'transparent'}
                    key={offers.indexOf(o)}
                    onPress={() =>
                      navigation.navigate('FoodRestauItems', {name: o.name})
                    }>
            <View  style={styles.singleOfferItem}>
              <Image style={styles.imageOffer} source={o.image}></Image>
              <View style={styles.itemInfos}>
                  <Text style={styles.itemName}>{o.name}</Text>
                  <View style={styles.itemMore}>
                    <StarRating
                      fullStarColor={'#FC6011'}
                      starStyle={{borderColor: '#FC6011'}}
                      disabled={false}
                      maxStars={1}
                      rating={o.rating / 5}
                      starSize={21}
                    />
                    <Text style={styles.rating}>{o.rating}</Text>
                    <Text style={styles.restaurant}>({o.ratingsNumber} ratings)</Text>
                    <Text style={styles.restaurant}>{o.type}</Text>
                    <Text style={styles.dot}>-</Text>
                    <Text style={styles.nameFoodType}>{o.foodType}</Text>
                  </View>
                </View>
            </View>
            </TouchableHighlight>
          )
        }))}
      </View>
    </ScrollView>
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
    marginLeft: 200,
  },
  descOff:{
    width:280,
    paddingLeft: 25,
    color: '#585A5AE3',
    marginTop:10
  },
  btnOffers:{
    backgroundColor: '#FC6011',
    margin:15,
    height:40,
    width:200,
    marginLeft:30,
    borderRadius:75
  },
  txtOffers:{
    color: 'white',
    textAlign: 'center',
    fontSize:16,
    fontWeight: 'bold',
    marginTop:5
  },
  allOffers:{
    marginBottom:50
  },
  singleOfferItem:{
    marginTop:30
  },
  imageOffer:{
    width:'100%',
    height:200
  },
  itemInfos: {
    // marginTop: -70,
    marginLeft: 20,
  },
  itemName: {
    color: '#202020C9',
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
    color: '#B6B7B7',
    fontSize: 14,
    marginLeft: 5,
  },
  dot: {
    color: '#FC6011',
    fontSize: 14,
    marginLeft: 5,
  },
  nameFoodType: {
    color: '#B6B7B7',
    fontSize: 14,
    marginLeft: 5,
  },
});
export default Offers;
