import React from 'react';
import {FlatList, View, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';
import ItemNews from './ItemNews';
import { useNews } from '../hooks/useNews';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    loading: {
      position: 'absolute',
      justifyContent: 'center',
      zIndex: 20,
      top: '50%',
    }
});

const ListNews = ({navigation}: any): JSX.Element => {

  const {articles, loading, nextPage } = useNews()

  return (
    <View style={styles.container}>

      <FlatList
        onEndReached={nextPage}
        data={articles} 
        renderItem={(article)=><ItemNews navigation={navigation} article={article.item}/>}
      />

      <View style={styles.loading}>
        <ActivityIndicator animating={loading} color="white" size="large"/>
      </View> 
         
    </View>
  );

};

export default ListNews;