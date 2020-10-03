import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import call from 'react-native-phone-call'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

export const HomeScreen = () => {
    const [counter, setCounter] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const handlePressCall = () => {
      const args = {
        number: '9093900003', 
        prompt: false 
      }
      call(args)
      .catch(console.error);
    }
    const handlePressAddMoney = () => {
        
    }
    const handlePressReceived = () => {
        if(counter >= 10)
          setCounter(0);
        else
          setCounter(counter + 1);
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.top}>
              <TouchableOpacity onPress={handlePressCall}>
                  <View style={styles.call}>
                    <Text style={styles.callText}>Call Tapan Da</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                  <View style={styles.addMoney}>
                    <Text style={styles.addMoneyText}>Add Money</Text>
                  </View>
              </TouchableOpacity>
            </View>
            <View style={styles.middle}>
              <Text style={styles.counter}>{counter}</Text>
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity onPress={handlePressReceived}>
                  <View style={styles.buttonReceived}>
                    <Text style={styles.buttonReceivedText}>Received for this Month</Text>
                  </View>
              </TouchableOpacity>
            </View>
            <Modal style={{padding:10}} isVisible={isModalVisible} animationIn={"zoomIn"} animationOut={"zoomOut"} backdropTransitionOutTiming={100}>
              <View style={{flex:.5, paddingVertical:20, backgroundColor:"#fff", borderRadius: 15}}>
                <Text>Hello!</Text>
                <Button title="Hide modal" onPress={toggleModal} />
              </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  counter:{
    fontWeight: "200",
    fontSize: 120,
    textAlign: "center"
  },

  top:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  call: {
    padding:10,
    paddingHorizontal: 20,
    backgroundColor: "navy",
    borderRadius:10
  },

  callText:{
    color: "#fff"
  },

  addMoney: {
    backgroundColor: "crimson",
    padding:10,
    paddingHorizontal: 20,
    width: 150,
    borderRadius: 10,
  },

  addMoneyText:{
    color: "#fff",
    textAlign: "center",
  },

  buttonReceived: {
    paddingVertical:10,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: "orange",
    elevation:1
  },

  buttonReceivedText:{
    color: "white"

  },

  middle: {
    margin:10,
    flex: 6,
    justifyContent: "center",
    alignItems: "center"
  },


  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },

  
  
});
  