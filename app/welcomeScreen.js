import React from 'react';
import {useFonts} from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export const WelcomeScreen = ({navigation}) => {
    const [loaded] = useFonts({
        Lobster: require('../assets/fonts/Lobster.ttf'),
    });
    
    if (!loaded) {
        return null;
    }
    setTimeout(() => {
        navigation.navigate('Main');
    },5000)
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.welcomeText}>Water Jar</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeText:{
        fontSize: 50,
        textAlign: "center",
        marginVertical: 40,
        fontFamily: 'Lobster'
    }
});