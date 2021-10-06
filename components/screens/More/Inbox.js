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

const Inbox = ({navigation}) => {
  const [messages, setMessages] = useState([
    {
      from:'Meal Monkey Promotions',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: '6th July',
      state: 'seen',
    },
    {
        from:'Meal Monkey Promotions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        time: '6th July',
        state: 'not seen',
      },
      {
        from:'Meal Monkey Promotions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        time: '6th July',
        state: 'seen',
      },
      {
        from:'Meal Monkey Promotions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        time: '6th July',
        state: 'not seen',
      },
      {
        from:'Meal Monkey Promotions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        time: '6th July',
        state: 'seen',
      },
      {
        from:'Meal Monkey Promotions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        time: '6th July',
        state: 'seen',
      },
      {
        from:'Meal Monkey Promotions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        time: '6th July',
        state: 'not seen',
      },
      {
        from:'Meal Monkey Promotions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        time: '6th July',
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
          <Text> Inbox</Text>
        </Text>
        <Text style={styles.cart}>
          <Icon size={27} name="shopping-cart" />
        </Text>
      </View>
      <View style={styles.allNotifs}>
        {messages.map(msg => {
          return (
            <TouchableHighlight key={messages.indexOf(msg)} underlayColor={'transparent'}>
            <View
              style={msg.state === 'seen' ? styles.key : styles.key2}
              >
              
                <View style={styles.containerNotifs}>
                  <View style={styles.bulletListPoint} />
                  <View style={styles.all}>
                      <Text style={styles.from}>{msg.from}</Text>
                  <Text style={styles.notifContent}>{msg.content.substring(0,70)}...</Text>
                  </View>
                  <Text style={styles.notifTime}>{msg.time}</Text>
                  
                </View>
                
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
  key: {
    backgroundColor: '#E1E2E2',
  },
  key2: {},
  allNotifs: {
    marginTop: 30,
  },
  containerNotifs: {
    flexDirection: 'row',
    marginTop: 20,
    marginRight:50
  },
  bulletListPoint: {
    width: 12,
    height: 12,
    backgroundColor: '#FC6011',
    borderColor: '#FC6011',
    borderRadius: 6,
    marginLeft: 27,
  },
  from:{
    marginTop: -8,
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 18,
    color:'#2B2B2CC9'

  },
  notifContent: {
    marginLeft: 18,
    marginBottom: 10,
    marginRight:50,
    color: '#8F8F8F',

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
    marginLeft: -50,
    marginTop: -15,
    color: '#8F8F8F',
    fontSize:12,
    marginTop:-7
  },
});
export default Inbox;
