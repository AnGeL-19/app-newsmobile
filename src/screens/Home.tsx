import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import ListNews from '../components/ListNews'

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#131313'
    }

});

const Home = ({navigation}: any): JSX.Element => {
    // 
  return (
    <View style={styles.container}>

      <ListNews navigation={navigation} />
      
    </View>
  )
}



export default Home;