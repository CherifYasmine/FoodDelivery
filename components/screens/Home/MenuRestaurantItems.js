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

const MenuRestaurantItems = ({navigation, route}) => {
    const {restaurantName} = route.params;
    const [menuItems, setMenuItems] = useState([
        {
          name: 'Food',
          Image: require('../../../assets/images/hamburger.jpeg'),
          itemsNumber: 125,
        },
        {
          name: 'Beverages',
          Image: require('../../../assets/images/hamburger.jpeg'),
          itemsNumber: 125,
        },
        {
          name: 'Desserts',
          Image: require('../../../assets/images/hamburger.jpeg'),
          itemsNumber: 125,
        },
        {
          name: 'Promotions',
          Image: require('../../../assets/images/hamburger.jpeg'),
          itemsNumber: 125,
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
          <Text> {restaurantName}</Text>
        </Text>
        <Text style={styles.cart}>
          <Icon size={27} name="shopping-cart" />
        </Text>
      </View>
          
          <View style={styles.orangeAll}>
            <View style={styles.orange}></View>
            <View style={styles.menuItems}>
              {menuItems.map(menuItem => {
                return (
                  <TouchableHighlight
                    underlayColor={'transparent'}
                    key={menuItems.indexOf(menuItem)}
                    onPress={() =>
                      navigation.navigate('FoodRestauItems', {name: menuItem.name})
                    }>
                    <View style={styles.menuItem}>
                      <View>
                        <View style={styles.nameImage}>
                          <Image
                            style={styles.menuItemImage}
                            source={menuItem.Image}></Image>
    
                          <Text style={styles.menuItemName}>{menuItem.name}</Text>
                          
                        </View>
                      </View>
                      <Text style={styles.itemsNumber}>
                        {menuItem.itemsNumber} Items
                      </Text>
                      <View style={{width: 200, height: 200}}>
                            <TouchableHighlight
                              underlayColor={'transparent'}
                              style={styles.menuItemIcon}
                              onPress={() =>
                                navigation.navigate('MenuItems', {
                                  name: menuItem.name,
                                })
                              }>
                              <Icon
                                style={{marginTop: 5}}
                                name="chevron-forward"
                                type="ionicon"
                                size={30}
                                color={'#FC6011'}></Icon>
                            </TouchableHighlight>
                          </View>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </View>
            
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
        marginLeft: 10,
        marginTop:10
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
      backIcon: {
        marginTop: 4,
        marginLeft: 5,
        width: 50,
        height: 50,
      },
      orangeAll:{
        flexDirection: 'row',
        marginTop:10,
        marginRight: 30,
        marginBottom: 30,
      },
      orange: {
        backgroundColor: '#FC6011',
        height: 520,
        width: 100,
        marginTop: 70,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 40,
      },
      menuItems: {
        marginTop: 85,
        marginLeft: -65,
        width:380
      },
      menuItem: {
        marginTop: 20,
        // width: '100%',
        marginRight: 45,
        marginLeft: 50,
        height: 100,
        backgroundColor: 'white',
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      menuItemImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 8,
        marginLeft: -45,
      },
      menuItemName: {
        color: '#4A4B4D',
        fontSize: 20,
        marginTop: 22,
        marginLeft: 20,
        fontWeight: 'bold',
        width: 150,
      },
      nameImage: {
        flexDirection: 'row',
      },
      itemsNumber: {
        fontSize: 12,
        color: '#B6B7B7',
        marginTop: -30,
        marginLeft: 57,
      },
      menuItemIcon: {
        marginTop: -45,
        marginLeft: '130%',
        backgroundColor: '#ffff',
        borderRadius: 20,
        width: 40,
        height: 40,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    });
export default MenuRestaurantItems;
