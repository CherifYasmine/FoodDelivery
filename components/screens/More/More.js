import React from 'react';
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

const More = ({navigation}) => {
  return (
    <ScrollView vertical={true} style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.greeting}>More</Text>
        <Text style={styles.cart}>
          <Icon size={26} name="shopping-cart"></Icon>
        </Text>
      </View>
      <View style={styles.cont}>
        <TouchableHighlight underlayColor={'transparent'} onPress={() =>
                  navigation.navigate('PaymentDetails')
                }>
          <View style={styles.moreContainer}>
            <View style={styles.iconContainer}>
              <Icon
                color={'#FC6011'}
                style={styles.icon}
                name="wallet"
                type="ionicon"
                size={25}
              />
            </View>
            <Text style={styles.textContainer}>Payment Details</Text>
            <TouchableHighlight onPress={() =>
                  navigation.navigate('PaymentDetails')
                }
              underlayColor={'transparent'}
              style={styles.iconMoreContainer}>
              <Icon
                color={'#FC6011'}
                style={styles.iconMore}
                name="chevron-forward"
                type="ionicon"
                size={25}
              />
            </TouchableHighlight>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'transparent'} onPress={() =>
                  navigation.navigate('MyOrders')
                } >
          <View style={styles.moreContainer}>
            <View style={styles.iconContainer}>
              <Icon
                color={'#FC6011'}
                style={styles.icon}
                name="cart"
                type="ionicon"
                size={25}
              />
            </View>
            <Text style={styles.textContainer}>My Orders</Text>
            <TouchableHighlight onPress={() =>
                  navigation.navigate('MyOrders')
                }
              underlayColor={'transparent'}
              style={styles.iconMoreContainer}>
              <Icon
                color={'#FC6011'}
                style={styles.iconMore}
                name="chevron-forward"
                type="ionicon"
                size={25}
              />
            </TouchableHighlight>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'transparent'} onPress={() =>
                  navigation.navigate('Notifications')
                }>
          <View style={styles.moreContainer}>
            <View style={styles.iconContainer}>
              <Icon
                color={'#FC6011'}
                style={styles.icon}
                name="notifications"
                type="ionicon"
                size={25}
              />
            </View>
            <Text style={styles.textContainer}>Notifications</Text>
            <TouchableHighlight onPress={() =>
                  navigation.navigate('Notifications')
                }
              underlayColor={'transparent'}
              style={styles.iconMoreContainer}>
              <Icon
                color={'#FC6011'}
                style={styles.iconMore}
                name="chevron-forward"
                type="ionicon"
                size={25}
              />
            </TouchableHighlight>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'transparent'} onPress={() =>
                  navigation.navigate('Inbox')
                }>
          <View
            underlayColor={'transparent'}
            style={styles.moreContainer}>
            <View style={styles.iconContainer}>
              <Icon
                color={'#FC6011'}
                style={styles.icon}
                name="mail"
                type="ionicon"
                size={25}
              />
            </View>
            <Text style={styles.textContainer}>Inbox</Text>
            <TouchableHighlight onPress={() =>
                  navigation.navigate('Inbox')
                }
              underlayColor={'transparent'}
              style={styles.iconMoreContainer}>
              <Icon
                color={'#FC6011'}
                style={styles.iconMore}
                name="chevron-forward"
                type="ionicon"
                size={25}
              />
            </TouchableHighlight>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'transparent'} onPress={() =>
                  navigation.navigate('AboutUs')
                }>
          <View style={styles.moreContainer}>
            <View style={styles.iconContainer}>
              <Icon
                color={'#FC6011'}
                style={styles.icon}
                name="information"
                type="ionicon"
                size={25}
              />
            </View>
            <Text style={styles.textContainer}>About Us</Text>
            <TouchableHighlight onPress={() =>
                  navigation.navigate('AboutUs')
                }
              underlayColor={'transparent'}
              style={styles.iconMoreContainer}>
              <Icon
                color={'#FC6011'}
                style={styles.iconMore}
                name="chevron-forward"
                type="ionicon"
                size={25}
              />
            </TouchableHighlight>
          </View>
        </TouchableHighlight>
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
  cont: {
    margin: 20,
    marginTop: 30
  },
  moreContainer: {
    height: 100,
    width: '98%',
    backgroundColor: '#E8E9E9',
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  iconContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#E8E9E9',
    marginTop: 20,
    marginLeft: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    marginTop: 17,
    marginLeft: 3,
  },
  textContainer: {
    color: '#5A5858',
    fontSize: 18,
    marginTop: 35,
    fontWeight: 'bold',
    marginLeft: '7%',
    width: '50%',
  },
  iconMoreContainer: {
    backgroundColor: '#E8E9E9',
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 38,
    marginTop: 27,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  iconMore: {
    marginTop: 12,
    marginLeft: 7,
  },
});
export default More;
