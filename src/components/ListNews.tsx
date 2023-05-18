import React, { useEffect, useState } from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import ItemNews from './ItemNews';
import { useNews } from '../hooks/useNews';



const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      columnGap: 20
    },
});

const ListNews = ({navigation}: any): JSX.Element => {

  const {articles, loading } = useNews()
  

  return (
    <View >
      {
        loading
        ? <Text>Cargando...</Text>
        : <FlatList
          data={articles} 
          renderItem={(article)=><ItemNews navigation={navigation} article={article.item}/>}
        />
      }
        
    </View>
  );

};

export default ListNews;