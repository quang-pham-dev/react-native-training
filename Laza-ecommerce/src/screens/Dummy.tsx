import React, { useContext } from 'react';
import { Button, Text, View, StyleSheet, Alert } from 'react-native';

// Context
import { AppContext } from 'context/AppContext';
import { SIGN_OUT, SIGN_OUT_SUCCESS, SIGN_OUT_FAILED } from 'context/actions/auth.action';

// API
import { authService } from 'api';

// Constants
import { AUTH_DATA } from 'constants/Common';

// Utils
import { remove } from 'utils/localStorage';

const DummyScreen = () => {
  const { authDispatch } = useContext(AppContext);

  const handlePressSignOut = async () => {
    authDispatch({ type: SIGN_OUT });
    try {
      await authService.signOut();
      await remove(AUTH_DATA);
      authDispatch({
        type: SIGN_OUT_SUCCESS,
      });
    } catch (error) {
      authDispatch({ type: SIGN_OUT_FAILED, payload: error });
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>APP VERSION NOT YET DEVELOPED</Text>
      <Button title='LogOut' onPress={handlePressSignOut} />
    </View>
  );
};

export default DummyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
