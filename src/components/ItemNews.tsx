import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

interface Props{
    article: any;
    navigation: any;
}

const styles = StyleSheet.create({
    container: {
      maxHeight: 350,
      backgroundColor: '#292929',
      marginBottom: 20,
      borderRadius: 10
    },
    containerImgage:{
      resizeMode: 'contain',
      height: 160,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10
    },
    padding: {
      padding: 10
    },
    containerTitle: {
      marginBottom: 5
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#EFEFEF',
    },
    description: {
      fontSize: 16,
      fontWeight: 'regular',
      color: '#E4E4E4',
    },
    containerDescription: {
      marginBottom: 5
    },
    containerLink: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    link: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#15C7FF',
    }
});

const ItemNews = ({navigation,article}: Props) => {

  const handlePress = () => {
    navigation.navigate({
      name: 'News',
      params: { article: article },
      merge: true,
    })
    
  }

  return (
    <View style={styles.container}>
      <View>
        {
          article.urlToImage
          &&
          <Image  style={styles.containerImgage} source={{uri: article.urlToImage}} />
        }
      </View>
      <View style={styles.padding}>
        <View style={styles.containerTitle}>
          <Text ellipsizeMode='tail' numberOfLines={3} style={styles.title}>{article.title}</Text>
        </View>
        <View style={styles.containerDescription}>
          <Text ellipsizeMode='tail' numberOfLines={3} style={styles.description}>{article.description}</Text>
        </View>
        <View style={styles.containerLink}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.link}>Show more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ItemNews;
