import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ProfileStats from '../components/ProfileStats';
import ProfileButtons from '../components/ProfileButtons';
import PostGrid from '../components/PostGrid';

const ProfileScreen = () => {
  const [followers, setFollowers] = useState(6929);

  const handleFollow = () => {
    setFollowers(followers + 1);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.spacer} />
      <ProfileHeader />
      <ProfileStats followers={followers} />
      <ProfileButtons onFollow={handleFollow} />
      <PostGrid />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  spacer: {
    height: 50,
  },
});

export default ProfileScreen;