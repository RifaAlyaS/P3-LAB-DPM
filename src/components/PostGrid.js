import React from 'react';
import { FlatList, Image, StyleSheet, View, Dimensions } from 'react-native';

const PostGrid = () => {
  const posts = [
    { id: '1', uri: 'https://via.placeholder.com/150' },
    { id: '2', uri: 'https://via.placeholder.com/150' },
    { id: '3', uri: 'https://via.placeholder.com/150' },
    { id: '4', uri: 'https://via.placeholder.com/150' },
    { id: '5', uri: 'https://via.placeholder.com/150' },
    { id: '6', uri: 'https://via.placeholder.com/150' },
    { id: '7', uri: 'https://via.placeholder.com/150' },
    { id: '8', uri: 'https://via.placeholder.com/150' },
    { id: '9', uri: 'https://via.placeholder.com/150' },
    { id: '10', uri: 'https://via.placeholder.com/150' },
    { id: '11', uri: 'https://via.placeholder.com/150' },
    { id: '12', uri: 'https://via.placeholder.com/150' },
  ];

  const numColumns = 3;
  const windowWidth = Dimensions.get('window').width;
  const imageSize = windowWidth / numColumns;

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={[styles.image, { width: imageSize, height: imageSize }]} />
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      style={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    margin: 1,
  },
  image: {
    resizeMode: 'cover',
  },
});

export default PostGrid;