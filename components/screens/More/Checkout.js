import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  Modal,
  Image,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';

const Checkout = ({navigation, route}) => {
  const {total} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [cards, setCards] = useState([
    {
      image: require('../../../assets/images/visa.png'),
      number: '1111 1111 1111 0384',
    },
    {
      image: require('../../../assets/images/visa.png'),
      number: '1111 1111 1111 0384',
    },
  ]);
  return (
    <ScrollView vertical={true} style={styles.container}>
      <View style={styles.title}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => navigation.navigate('MyOrders')}
          style={styles.backIcon}>
          <Icon
            size={33}
            color={'#2B2B2CC9'}
            name="chevron-back"
            type="ionicon"></Icon>
        </TouchableHighlight>
        <Text style={styles.greeting}>
          <Text>Checkout</Text>
        </Text>
        <Text style={styles.cart}>
          <Icon size={27} name="shopping-cart" />
        </Text>
      </View>
      <View style={styles.deliveryAddress}>
        <Text style={styles.deliveryAddressName}>Delivery Address</Text>
        <View style={styles.adressContainer}>
          <Text style={styles.address}>
            2 cité El Wifek Avenue de Carthage Route Maalga La Marsa
          </Text>
          <TouchableHighlight
            onPress={() => navigation.navigate('ChangeAddress', {
              total: total,
            })}
            underlayColor={'transparent'}
            style={styles.changeAdressCont}>
            <Text style={styles.changeAdress}>Change</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.grey}></View>
      <View style={styles.paymentMethodContainer}>
        <Text style={styles.deliveryAddressName}>Payment Method</Text>
        <View style={styles.containerCard}>
          <Text style={styles.cash}>Cash on Delivery</Text>
          <TouchableHighlight underlayColor={'#FC6011'} style={styles.circle}><View/></TouchableHighlight>
        </View>
        {cards.map(card => {
          return (
            <View key={cards.indexOf(card)} style={styles.containerCard}>
                <Image style={styles.cardImage} source={card.image}></Image>
              <Text style={styles.cash2}>**** **** **** {card.number.substring(15,20)}</Text>
              <TouchableHighlight underlayColor={'#FC6011'} style={styles.circle}><View/></TouchableHighlight>
            </View>
          );
        })}
      </View>
      <View style={styles.grey}></View>
      <View style={styles.subTotal}>
        <Text style={styles.totalName}>Total</Text>
        <Text style={styles.total} >${(total + 4).toFixed(2)}</Text>
      </View>
      <View style={styles.grey}></View>
      <TouchableHighlight underlayColor={'transparent'} onPress={() => {setModalVisible(true)}} style={styles.addCardModal}>
        <Text style={styles.checkout}>Send Order</Text>
      </TouchableHighlight>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalTitle}>
                <TouchableHighlight
                  underlayColor={'transparent'}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.modalCloseIcon}>
                    <Icon size={30} name="close" />
                  </Text>
                </TouchableHighlight>
              </View>
              <Image style={styles.thankYouImage} source={require('../../../assets/images/thankYou.png')}></Image>
              <Text style={styles.thankYouText}>Thank You!</Text>
              <Text style={styles.thankYouText2}>For Your Order</Text>
              <Text style={styles.text}>Your Order is now being processed. We will let you know once the order is picked from the outlet. </Text>
              <Text style={styles.text2}>Check the status of your order.</Text>

              <TouchableHighlight
                underlayColor={'transparent'}
                style={styles.addCardModall}>
                  <Text style={styles.addCardTextModal}>Track Your Order</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={'transparent'}
                onPress={()=>navigation.navigate('Tabs')}
                style={styles.addCardModal2}>
                  <Text style={styles.addCardTextModal2}>Go Back</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
  deliveryAddress: {
    margin: 30,
  },
  deliveryAddressName: {
    color: '#838282',
    fontSize: 15,
    fontWeight: 'bold',
  },
  adressContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  address: {
    color: '#494949',
    fontWeight: 'bold',
    width: '70%',
  },
  changeAdressCont: {},
  changeAdress: {
    color: '#FC6011',
    marginLeft: '30%',
    marginTop: '9%',
    fontWeight: 'bold',
  },
  grey: {
    height: 17,
    width: '100%',
    backgroundColor: '#E8E9E9',
  },
  paymentMethodContainer: {
    margin: 30,
  },
  containerCard: {
    width: '100%',
    height: 50,
    backgroundColor: '#E8E9E9',
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
  },
  cash: {
    color: '#5F5F5F',
    fontWeight: 'bold',
    margin: 12,
    width: '82%',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#FC6011',
    borderWidth: 1,
    marginTop: 13,
  },
  cardImage:{
      height:20,
      width:55,
      marginTop: 13,
      marginLeft:12  
  },
   containerCard: {
    width: '100%',
    height: 50,
    backgroundColor: '#E8E9E9',
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
  },
  cash2: {
    color: '#5F5F5F',
    fontWeight: 'bold',
    margin: 12,
    width: '62.5%',
  },
  subTotal:{
    flexDirection: 'row',
    marginTop:10,
    marginBottom:10,
    marginLeft:20,
  },
  totalName: {
    fontSize: 19,
    color: '#2B2C2CDE',
    fontWeight: 'bold',
    width:'70%',
    marginLeft:10,
    marginTop:10,
  },
  total:{
    color: '#FC6011',
    fontWeight: 'bold',
    fontSize: 19,
    marginTop:12,
  },
  addCardModal: {
    width: '80%',
    height: 60,
    backgroundColor: '#FC6011',
    borderRadius: 30,
    marginLeft:50,
    marginTop:30
  },
  addCardModall: {
    width: '80%',
    height: 60,
    backgroundColor: '#FC6011',
    borderRadius: 30,
    marginLeft:10,
    marginTop:30
  },
  addCardModal2: {
    width: '80%',
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 30,
    marginLeft:10,
  },
  checkout:{
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold',
    marginTop:12
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    marginTop: 200,
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: 740,
  },
 
  modalCloseIcon: {
    color: '#4A4B4D',
    fontWeight: 'bold',
    marginLeft: 320,
    marginTop:-20
  },
  addCardTextModal: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
    marginLeft: 15,
  },
  addCardTextModal2: {
    textAlign: 'center',
    color: '#626264',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
    marginLeft: 15,
  },
  thankYouImage:{
    marginTop:30,
    height:250,
    width:250
  },
  thankYouText:{
    color: '#626264',
    fontSize:30,
    textAlign:'center',
    fontWeight:'bold'
  },
  thankYouText2:{
    color: '#626264',
    fontSize:19,
    textAlign:'center',
  },
  text:{
    textAlign:'center',
    marginTop:20,
    color: '#626264',
    fontSize:14,

  },
  text2:{
    textAlign:'center',
    color: '#626264',
    fontSize:14,

  }

});

export default Checkout;
