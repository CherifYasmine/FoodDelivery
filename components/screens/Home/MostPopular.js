import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import StarRating from 'react-native-star-rating';

const MostPopular = () => {
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
      <ScrollView horizontal={true}>
        {popularRests.map(p => {
          return (
            <View style={styles.containerRests}>
              <Image style={styles.imageRest} source={p.image}></Image>
              <Text style={styles.nameRest}>{p.name}</Text>
              <View style={styles.restInfos}>
                <Text style={styles.foodType}>{p.foodType}</Text>
                <Text style={styles.restaurantStars}>
                  <StarRating
                    fullStarColor={'#FC6011'}
                    starStyle={{borderColor: '#FC6011'}}
                    disabled={false}
                    maxStars={1}
                    rating={p.rating / 5}
                    starSize={21}
                  />
                </Text>
                <Text style={styles.rat}>{p.rating}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    flexDirection: 'row',
    marginTop: 30,
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
  imageRest: {
    width: 240,
    height: 150,
    borderRadius: 25,
  },
  containerRests: {
    marginHorizontal: 10,
  },
  nameRest: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222324CE',
  },
  restInfos: {
    flexDirection: 'row',
  },
  foodType:{
    color:'#B6B7B7',
    fontSize:13,
    marginLeft: 10
  },
  restaurantStars:{
      marginLeft:20
  },
  rat:{
    color: '#FC6011',
    fontSize:13,

  }
});
export default MostPopular;
