import React from 'react';
import {Text, View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import ListNews from '../components/ListNews'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#131313'
    }

});

const Home = ({navigation}: any): JSX.Element => {

  return (
    <SafeAreaView style={styles.container}>

      <ListNews navigation={navigation} />

    </SafeAreaView>
  )
}



export default Home;