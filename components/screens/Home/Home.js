import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MostPopular from './MostPopular';
import PopularRestaurants from './PopularRestaurants';
import RecentItems from './RecentItems';

const Home = () => {
  const [options, setOptions] = useState([
    {name: 'offers', image: require('../../../assets/images/hamburger.jpeg')},
    {name: 'Srl Lankan', image: require('../../../assets/images/hamburger.jpeg')},
    {name: 'Italian', image: require('../../../assets/images/hamburger.jpeg')},
    {name: 'Indian', image: require('../../../assets/images/hamburger.jpeg')},
    {name: 'Chineese', image: require('../../../assets/images/hamburger.jpeg')},
    

  ]);
  const [choice, setChoice] = useState(false);
  return (
    <ScrollView vertical={true} style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.greeting}>Good Morning Yasmine!</Text>
        <Text style={styles.cart}>
          <Icon size={24} name="shopping-cart"></Icon>
        </Text>
      </View>
      <View>
        <Text style={styles.deliveringTo}>Delivering To</Text>
        <View style={styles.location}>
          <Text
            onPress={() => {
              setChoice(!choice);
              console.log(choice);
            }}
            style={styles.locationChoosen}>
            Current Location
          </Text>
          <Text
            onPress={() => {
              setChoice(!choice);
              console.log(choice);
            }}
            style={styles.arrowDown}>
            <Icon size={20} name="chevron-down"></Icon>
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
      <View style={styles.options}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
        {options.map(e => {
          return (
            <View style={styles.optionsScroll} key={options.indexOf(e)}>
              <Image style={styles.imageOptions} source={e.image}></Image>
              <Text style={styles.textOptions}>{e.name}</Text>
            </View>
          );
        })}
      </ScrollView>
      </View>
      <PopularRestaurants/>
      <MostPopular/>
      <RecentItems/>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginTop: 20,
    height:600
  },
  title: {
    flexDirection: 'row',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  cart: {
    marginLeft: 100,
  },
  deliveringTo: {
    color: '#B6B7B7',
    marginTop: 30,
    paddingLeft: 20,
  },
  location: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  locationChoosen: {
    fontSize: 17,
    color: '#4A4B4D',
  },
  arrowDown: {
    marginLeft: 40,
    color: '#FC6011',
  },
  choices: {
    marginLeft: 20,
  },
  loc: {
    fontSize: 15,
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
  options: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    paddingLeft: 20,
  },
  optionsScroll: {
    marginHorizontal: 10,
    
  },
  imageOptions: {
    height: 70,
    width: 70,
    borderRadius: 15,
  },
  textOptions:{
    textAlign: 'center',
    color:'#535355',
    fontWeight:'bold'
  }
});
export default Home;
