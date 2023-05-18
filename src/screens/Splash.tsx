import React from 'react'

import {Text,View,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#131313'
    },
    text:{
        fontSize: 36,
        fontWeight: 'bold',
        color: '#F3F3F3'
    }
})

const Splash = ({navigation}:any) => {

    setTimeout(() => {
        navigation.replace('Home');
    }, 1000);

  return (
    <View style={styles.container}>
        <Text style={styles.text}>AngelMR</Text>
    </View>
  )
}



export default Splash