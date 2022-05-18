import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text, View, StyleSheet, Alert } from 'react-native';
import { authService } from 'api';
import { AUTH_DATA } from 'constants/Common';
import { SIGN_OUT } from 'types/Actions';
import { AppContext } from 'context/AppContext';

const DraffScreen = () => {
  const { authDispatch } = useContext(AppContext);

  const handlePressSignOut = async () => {
    try {
      await authService.signOut();
      await AsyncStorage.removeItem(AUTH_DATA);
      authDispatch({
        type: SIGN_OUT,
      });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>DraffScreen</Text>
      <Button title='LogOut' onPress={handlePressSignOut} />
    </View>
  );
};

export default DraffScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
