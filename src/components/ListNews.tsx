import React from 'react';
import {FlatList, View, StyleSheet, ActivityIndicator} from 'react-native';
import ItemNews from './ItemNews';
import { useNews } from '../hooks/useNews';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      
    },
});

const ListNews = ({navigation}: any): JSX.Element => {

  const {articles, loading } = useNews()
  
  return (
    <View style={styles.container}>
      {
        loading
        ? <ActivityIndicator animating={loading} color="white" size="large"/>
        : <FlatList
          data={articles} 
          renderItem={(article)=><ItemNews navigation={navigation} article={article.item}/>}
        />
      }
        
    </View>
  );

};

export default ListNews;