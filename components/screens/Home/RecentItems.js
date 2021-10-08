import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableHighlight} from 'react-native';
import StarRating from 'react-native-star-rating';

const RecentItems = ({navigation}) => {
  const [recentItems, setRecentItems] = useState([
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
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.greeting}>RecentItems</Text>
        <TouchableHighlight>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableHighlight>
      </View>
      {recentItems.slice(0, 3).map(r => {
        return (
          <TouchableHighlight onPress={()=>navigation.navigate('MenuRestaurantItems', {restaurantName: r.name})} underlayColor={'transparent'} key={recentItems.indexOf(r)}>
            <View style={styles.recentItems}>
              <Image style={styles.recentItemImage} source={r.image}></Image>
              <View style={styles.recentItemInfos}>
                <Text style={styles.name}>{r.name}</Text>
                <View style={styles.recentInfos}>
                  <Text style={styles.type}>{r.type}</Text>
                  <Text style={styles.dot}>-</Text>
                  <Text style={styles.foodType}>{r.foodType}</Text>
                </View>
                <View style={styles.restInfos}>
                  <Text style={styles.restaurantStars}>
                    <StarRating
                      fullStarColor={'#FC6011'}
                      starStyle={{borderColor: '#FC6011'}}
                      disabled={false}
                      maxStars={1}
                      rating={r.rating / 5}
                      starSize={21}
                    />
                  </Text>
                  <Text style={styles.rat}>{r.rating}</Text>
                  <Text style={styles.ratingsNumber}>
                    ({r.ratingsNumber} ratings)
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    flexDirection: 'row',
    marginTop: 30,
    paddingLeft: 20,
  },
  greeting: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 12,
    color: '#FC6011',
    marginLeft: '62%',
    marginTop: 15,
    fontWeight: 'bold',
  },
  recentItems: {
    marginTop: 10,
    marginLeft: '7%',
    flexDirection: 'row',
  },
  recentItemImage: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  recentItemInfos: {
    marginLeft: 20,
  },
  recentInfos: {
    flexDirection: 'row',
  },
  dot: {
    fontSize: 13,
    marginLeft: 10,
    color: '#FC6011',
    fontWeight: 'bold',
  },
  foodType: {
    marginLeft: 10,
    color: '#B6B7B7',
    fontSize: 13,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222324CE',
  },
  type: {
    color: '#B6B7B7',
    fontSize: 13,
  },
  restInfos: {
    flexDirection: 'row',
  },
  ratingsNumber: {
    color: '#B6B7B7',
    fontSize: 13,
    marginLeft: 10,
  },
  restaurantStars: {},
  rat: {
    color: '#FC6011',
    fontSize: 13,
  },
});
export default RecentItems;
