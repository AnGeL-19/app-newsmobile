import React, { useEffect, useState } from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import ItemNews from './ItemNews';



const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      columnGap: 20
    },
});

const ListNews = ({navigation}: any): JSX.Element => {

  const [articles, setArticles] = useState([])

  const getArticles = async () => {

    try {

        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?pageSize=10&country=us&apiKey=fb82d469683e498e9ae85b49eda2590f',
        );
        const json = await response.json();
        setArticles(json.articles);

      } catch (error) {
        console.error(error);
      }

  }

  useEffect(() => {
    getArticles()
  }, [])
  

  return (
    <View >
        <FlatList
            data={articles} 
            renderItem={(article)=><ItemNews navigation={navigation} article={article.item}/>}
        />
    </View>
  );

};

export default ListNews;