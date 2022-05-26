import React, { memo, useCallback, useContext, useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, Switch, Text, View } from 'react-native';

// LIB
import isEqual from 'react-fast-compare';

// Components
import LoadingIndicator from 'components/LoadingIndicator';
import Button from 'components/Button';
import Title from 'components/Title';
import LoginForm from 'screens/SignIn/components/LoginForm';

// Context
import { AppContext } from 'context/AppContext';
import { SIGN_IN_SUCCESS, SIGN_IN_FAILED, SIGN_IN } from 'context/actions/auth';

// API
import { authService } from 'api';

// Constants
import { AUTH_DATA } from 'constants/Common';

// Utils
import { set } from 'utils/localStorage';

// Types
import { ISignInScreenProps } from 'types/screens/SignIn';
import { ILoginCredentials } from 'types/models/User';

// Themes
import IMAGES from 'themes/Images';

// Styles
import { styles } from './styles';

const SignInScreen = ({ navigation }: ISignInScreenProps) => {
  const { authState, authDispatch } = useContext(AppContext);

  const { isProcessing } = authState || {};

  // handle action call api SignIn when user press Login button
  const onSubmitHandler = async (loginInfo: ILoginCredentials) => {
    authDispatch({ type: SIGN_IN });
    const { username, password } = loginInfo;
    try {
      const response = await authService.signIn(username, password);
      const data = JSON.stringify(response.data);
      // set auth data info to local storage
      await set(AUTH_DATA, data);
      const { user } = response.data;
      const { access_token } = response.data;
      if (user && access_token) {
        authDispatch({
          type: SIGN_IN_SUCCESS,
          payload: {
            user,
            access_token,
          },
        });
      }
    } catch (error) {
      authDispatch({ type: SIGN_IN_FAILED, payload: error });
      Alert.alert('Error', error.message);
    }
  };

  // handle action when press goBack
  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ScrollView>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.iconBackWrapper}>
              <Button
                icon={IMAGES.iconBack}
                iconStyles={[styles.iconBack]}
                onPress={handlePressBack}
              />
            </View>
            <Title titleStyles={styles.headerTitle} titleName='Welcome'></Title>
            <Title
              titleStyles={styles.headerSubTitle}
              titleName='Please enter your data to continue'></Title>
          </View>
          {/* end header */}
          {Boolean(isProcessing) && <LoadingIndicator />}
          {/* Form */}
          <LoginForm onSubmit={onSubmitHandler} />
          {/* end Form */}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default memo(SignInScreen, isEqual);
