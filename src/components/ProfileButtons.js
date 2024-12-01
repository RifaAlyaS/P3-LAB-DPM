import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ProfileButtons = ({ onFollow }) => {
  return (
    <View style={styles.container}>
      <Button title="Follow" color="#800000" onPress={onFollow} />
      <Button title="Message" color="#893F45" />
      <Button title="Contact" color="#893F45" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
});

export default ProfileButtons;