import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileStats = ({ followers }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={styles.value}>3,272</Text>
        <Text style={styles.label}>Posts</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.value}>{followers}</Text>
        <Text style={styles.label}>Followers</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.value}>1,292</Text>
        <Text style={styles.label}>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  stat: {
    alignItems: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontSize: 12,
    color: '#555',
  },
});

export default ProfileStats;