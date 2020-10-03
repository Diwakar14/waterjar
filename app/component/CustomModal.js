import React, { useState } from 'react';
import {View, Button, Text} from 'react-native';
import Modal from 'react-native-modal';

export const CustomModal = ({isModalVisible}) => {
    

    const handleClose = () => {
        
    }
    return (
        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={() => handleClose} />
          </View>
        </Modal>
    );
}