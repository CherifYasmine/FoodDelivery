import React, {useState} from 'react';
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

const PaymentDetails = ({navigation}) => {
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
    <View style={{backgroundColor:modalVisible?'#818181':'transparent'}}>
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
            <Text> Payment Details</Text>
          </Text>
          <Text style={styles.cart}>
            <Icon size={27} name="shopping-cart" />
          </Text>
        </View>
        <Text style={styles.cust}>Customize your payment method</Text>
        <View style={styles.line} />
        <View style={styles.cardsContainer}>
          <View style={styles.cardTextCont}>
            <Text style={styles.cardText}>Cash/Card on Delivery</Text>
            <View style={styles.line} />
          </View>
          {cards.map(card => {
            return (
              <View key={cards.indexOf(card)}>
                <View style={styles.cards}>
                  <Image style={styles.visaImage} source={card.image}></Image>
                  <Text style={styles.cardNumber}>
                    **** **** **** {card.number.substring(15, 20)}
                  </Text>
                  <TouchableHighlight
                    underlayColor={'transparent'}
                    style={styles.deleteCardBtn}>
                    <Text style={styles.deleteCardText}>Delete Card</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.line2} />
              </View>
            );
          })}
          <View style={styles.cardTextCont}>
            <Text style={styles.cardText}>Other Methods</Text>
          </View>
        </View>
        <TouchableHighlight
          onPress={() => setModalVisible(true)}
          underlayColor={'transparent'}
          style={styles.addCard}>
          <View style={styles.addCont}>
            <Text style={styles.plus}>+</Text>
            <Text style={styles.addCardText}>
              Add Another Credit/Debit Card
            </Text>
          </View>
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
                <Text style={styles.modalAddTitle}>Add Credit/Debit Card</Text>
                <TouchableHighlight
                  underlayColor={'transparent'}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.modalCloseIcon}>
                    <Icon size={30} name="close" />
                  </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.containerInput}>
                <TextInput
                  style={styles.inputName}
                  placeholder="Card Number"
                  placeholderTextColor="#7071744F"
                />
              </View>
              <View style={styles.containerExpiryInput}>
                <Text style={styles.expiryTtl}>Expiry</Text>
                <View style={styles.inputsContainer}>
                  <View style={styles.smallInputContainer}>
                    <TextInput
                      style={styles.inputName}
                      placeholder="MM"
                      placeholderTextColor="#7071744F"
                    />
                  </View>
                  <View style={styles.smallInputContainer}>
                    <TextInput
                      style={styles.inputName}
                      placeholder="YY"
                      placeholderTextColor="#7071744F"
                    />
                  </View>
                </View>
              </View>
              <View style={styles.containerInput}>
                <TextInput
                  style={styles.inputName}
                  placeholder="Security Code"
                  placeholderTextColor="#7071744F"
                />
              </View>
              <View style={styles.containerInput}>
                <TextInput
                  style={styles.inputName}
                  placeholder="First Name"
                  placeholderTextColor="#7071744F"
                />
              </View>
              <View style={styles.containerInput}>
                <TextInput
                  style={styles.inputName}
                  placeholder="Last Name"
                  placeholderTextColor="#7071744F"
                />
              </View>
              <TouchableHighlight
                underlayColor={'transparent'}
                style={styles.addCardModal}>
                <View style={styles.addCont}>
                  <Text style={styles.plusModal}>+</Text>
                  <Text style={styles.addCardTextModal}>Add Card</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 600,
  },
  title: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  greeting: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
    width: 330,
  },
  cart: {
    marginTop: 6,
    marginLeft: -40,
  },
  backIcon: {
    marginTop: 5,
    marginLeft: 5,
    width: 50,
    height: 50,
  },
  cust: {
    fontSize: 17,
    margin: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333435DE',
  },
  line: {
    borderBottomColor: '#D4D6D6',
    borderBottomWidth: 1.5,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  cardsContainer: {
    backgroundColor: '#E8E9E9',
    marginTop: 20,
  },
  cardTextCont: {
    margin: 20,
  },
  cardText: {
    fontWeight: 'bold',
    color: '#333435DE',
    marginLeft: 20,
  },
  addCard: {
    margin: 20,
    width: '80%',
    height: 60,
    backgroundColor: '#FC6011',
    marginLeft: 40,
    borderRadius: 30,
    marginTop: 40,
  },
  addCardText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
    marginLeft: 10,
  },
  plus: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 9,
    marginLeft: 15,
  },
  addCont: {
    flexDirection: 'row',
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitle: {
    flexDirection: 'row',
  },
  modalAddTitle: {
    color: '#4A4B4D',
    fontWeight: 'bold',
    fontSize: 17,
  },
  modalCloseIcon: {
    color: '#4A4B4D',
    fontWeight: 'bold',
    marginLeft: 130,
  },
  cards: {
    flexDirection: 'row',
  },
  visaImage: {
    width: 70,
    height: 20,
    marginLeft: 30,
  },
  cardNumber: {
    marginLeft: 20,
    textAlign: 'center',
    marginTop: 3,
    color: '#757575',
  },
  deleteCardBtn: {
    width: 120,
    height: 30,
    borderColor: '#FC6011',
    borderWidth: 1.5,
    borderRadius: 60,
    marginLeft: 15,
  },
  deleteCardText: {
    color: '#FC6011',
    fontSize: 15,
    textAlign: 'center',
  },
  line2: {
    borderBottomColor: '#D4D6D6',
    borderBottomWidth: 1.5,
    marginRight: 35,
    marginLeft: 35,
    marginTop: 10,
    marginBottom: 20,
  },
  containerInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#E8E9E9B7',
    borderRadius: 100,
    marginTop: 30,
  },
  inputName: {
    marginLeft: 37,
    color: '#656668',
  },
  containerExpiryInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  expiryTtl: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  smallInputContainer: {
    width: 100,
    height: 50,
    backgroundColor: '#E8E9E9B7',
    borderRadius: 100,
    marginLeft: 20,
  },
  inputsContainer: {
    marginLeft: 60,
    flexDirection: 'row',
  },
  addCardModal: {
    width: '100%',
    height: 60,
    backgroundColor: '#FC6011',
    borderRadius: 30,
    marginTop: 30,
  },
  addCardTextModal: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 15,
    marginLeft: 20,
  },
  plusModal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 9,
    marginLeft: '30%',
  },
});

export default PaymentDetails;
