import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {dateFormat} from '../helpers/formatDate';
import { IArticle } from '../interfaces/article';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#131313',
  },
  title: {
    color: '#F23479',
    fontSize: 24,
    fontWeight: 'bold',
  },
  author: {
    color: '#696969',
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  containerImage: {
    marginBottom: 10,
  },
  image: {
    height: 300,
    borderRadius: 10,
  },
  containerInfoCreation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  company: {
    color: '#D9D9D9',
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#717171',
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerDescription: {
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EFEFEF',
  },
  containerContent: {
    marginBottom: 30,
  },
  textSubtitle: {
    color: '#F23479',
    fontSize: 18,
  },
  content: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#E4E4E4',
  },
  containerLink: {
    marginBottom: 30,
  },
});

const News = ({navigation, route}) => {
  
  const article: IArticle = route.params.article;

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>{article.title}</Text>
        {article.author && <Text style={styles.author}>{article.author}</Text>}
      </View>
      {article.urlToImage && (
        <View style={styles.containerImage}>
          <Image style={styles.image} source={{uri: article.urlToImage}} />
        </View>
      )}
      <View style={styles.containerInfoCreation}>
        <Text style={styles.company}>{article.source.name}</Text>
        <Text style={styles.date}>{dateFormat(article.publishedAt)}</Text>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.description}>{article.description}</Text>
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.textSubtitle}>Content</Text>
        <Text style={styles.content}>{article.content}</Text>
      </View>
    </ScrollView>
  );
};

export default News;
