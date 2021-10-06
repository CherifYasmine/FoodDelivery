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

const Menu = ({navigation}) => {
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
        <Text style={styles.greeting}>Menu</Text>
        <Text style={styles.cart}>
          <Icon size={24} name="shopping-cart"></Icon>
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
      <View style={styles.orangeAll}>
        <View style={styles.orange}></View>
        <View style={styles.menuItems}>
          {menuItems.map(menuItem => {
            return (
              <TouchableHighlight
                underlayColor={'transparent'}
                key={menuItems.indexOf(menuItem)}
                onPress={() =>
                  navigation.navigate('MenuItems', {name: menuItem.name})
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
    marginLeft: '10%',
    marginRight: '10%',
    width: '100%',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cart: {
    marginLeft: '60%',
  },
  inputSearchAll: {
    backgroundColor: '#E8E9E9',
    marginTop: 30,
    color: '#B6B7B7E3',
    width: '80%',
    borderRadius: 350 / 2,
    marginLeft: '10%',
    textAlign: 'center',
    flexDirection: 'row',
    height: 50,
    // paddingLeft: 20,
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
  orangeAll:{
    flexDirection: 'row',
    marginTop:-20,
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
export default Menu;
