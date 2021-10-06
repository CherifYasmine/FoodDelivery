import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';

const Notifications = ({navigation}) => {
  const [notifications, setNotifications] = useState([
    {
      content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
      time: 'Now',
      state: 'seen',
    },
    {
      content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
      time: '1 hour ago',
      state: 'not seen',
    },
    {
      content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
      time: '1 hour ago',
      state: 'seen',
    },
    {
      content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
      time: '3 hours ago',
      state: 'seen',
    },
    {
      content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
      time: '1 hour ago',
      state: 'not seen',
    },
    {
      content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
      time: '1 hour ago',
      state: 'seen',
    },
    {
        content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
        time: '1 hour ago',
        state: 'not seen',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
        time: '1 hour ago',
        state: 'seen',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
        time: '24 hours ago',
        state: 'seen',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
        time: '24 hours ago',
        state: 'not seen',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consec adipiscing elit.',
        time: '24 hours ago',
        state: 'seen',
      },
  ]);
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
          <Text> Notifications</Text>
        </Text>
        <Text style={styles.cart}>
          <Icon size={27} name="shopping-cart" />
        </Text>
      </View>
      <View style={styles.allNotifs}>
        {notifications.map(notif => {
          return (
            <TouchableHighlight key={notifications.indexOf(notif)} underlayColor={'transparent'}>
            <View
              style={notif.state === 'seen' ? styles.key : styles.key2}
              >
              
                <View style={styles.containerNotifs}>
                  <View style={styles.bulletListPoint} />
                  <Text style={styles.notifContent}>{notif.content}</Text>
                </View>
                <Text style={styles.notifTime}>{notif.time}</Text>
                <View style={styles.line} />
            </View>
            </TouchableHighlight>
          );
        })}
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
  key: {
    backgroundColor: '#E1E2E2',
  },
  key2: {},
  allNotifs: {
    marginTop: 45,
  },
  containerNotifs: {
    flexDirection: 'row',
    marginTop: 20,
  },
  bulletListPoint: {
    width: 12,
    height: 12,
    backgroundColor: '#FC6011',
    borderColor: '#FC6011',
    borderRadius: 6,
    marginLeft: 27,
  },
  notifContent: {
    marginTop: -3,
    marginLeft: 18,
    marginBottom: 18,
  },
  line: {
    borderBottomColor: '#D4D6D6',
    borderBottomWidth: 1.5,
    // marginRight: 20,
    // marginLeft: 20,
    marginTop: 15,
    // marginBottom:17
  },
  notifTime: {
    marginLeft: 55,
    marginTop: -15,
    color: '#8F8F8F',
  },
});
export default Notifications;
