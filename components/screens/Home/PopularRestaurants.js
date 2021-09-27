import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import StarRating from 'react-native-star-rating';

const PopularRestaurants = () => {
  const [popularRests, setPopularRests] = useState([
    {
      name: 'Minute by tuk tuk',
      image: require('../../../assets/images/hamburger.jpeg'),
      rating: 4.5,
      ratingsNumber: 125,
      foodType: 'Western Food',
    },
    {
      name: 'Café De Noir',
      image: require('../../../assets/images/hamburger.jpeg'),
      rating: 3.5,
      ratingsNumber: 125,
      foodType: 'Western Food',
    },
    {
      name: 'Bakes By Tella',
      image: require('../../../assets/images/hamburger.jpeg'),
      rating: 4.5,
      ratingsNumber: 125,
      foodType: 'Western Food',
    },
    {
      name: 'Minute by tuk tuk',
      image: require('../../../assets/images/hamburger.jpeg'),
      rating: 4.5,
      ratingsNumber: 125,
      foodType: 'Western Food',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.greeting}>Popular Restaurants</Text>
        <TouchableHighlight>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.rests}>
        {popularRests.slice(0,3).map(e => {
          return (
            <View key={popularRests.indexOf(e)} style={styles.restaurant}>
              <Image style={styles.restaurantImage} source={e.image}></Image>
              <View style={styles.restaurantInfos1}>
                <Text style={styles.restaurantName}>{e.name}</Text>
                <Text style={styles.restaurantStars}>
                  <StarRating
                    fullStarColor={'#FC6011'}
                    starStyle={{borderColor: '#FC6011'}}
                    disabled={false}
                    maxStars={5}
                    rating={e.rating}
                    starSize={21}
                  />
                </Text>
              </View>
              <View style={styles.restaurantInfos}>
                <Text style={styles.ratingsNumber} t>
                  ({e.ratingsNumber} ratings)
                </Text>
                <Text style={styles.foodType}>{e.foodType}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
  },
  title: {
    flexDirection: 'row',
    marginTop: 30,
    paddingLeft: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 12,
    color: '#FC6011',
    marginLeft: '45%',
    marginTop: 15,
    fontWeight: 'bold',
  },
  rests: {
    marginTop: 15,
  },
  restaurant: {
    marginTop: 25,
  },
  restaurantImage: {
    width: '100%',
    height: 230,
  },
  restaurantName: {
    color: '#222324CE',
    fontWeight: 'bold',
    marginLeft: '10%',
    fontSize: 17,
  },
  restaurantInfos: {
    flexDirection: 'row',
    paddingLeft: 40,

  },
  restaurantRating: {},
  ratingsNumber: {
      color:'#B6B7B7',
      fontSize:13
  },
  foodType: {
    color:'#B6B7B7',
    marginLeft:'20%',
    fontSize:13

  },
  restaurantStars: {
    marginLeft: '25%',
    marginTop: 3,
  },
  restaurantInfos1: {
    flexDirection: 'row',
  }
});
export default PopularRestaurants;
