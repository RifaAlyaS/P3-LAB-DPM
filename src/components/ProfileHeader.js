import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://via.placeholder.com/150',
        }}
        style={styles.profileImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.username}>gataunama</Text>
        <Text style={styles.description}>Ini akun gabut</Text>
        <Text style={styles.organization}>Nonprofit Organization</Text>
        <Text style={styles.bio}>
          We educate, empower and inspire Irish girls to become tomorrow's strong, resilient, and confident young women.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginTop: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: '#555',
    marginVertical: 2,
  },
  organization: {
    fontStyle: 'italic',
    color: '#888',
  },
  bio: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default ProfileHeader;