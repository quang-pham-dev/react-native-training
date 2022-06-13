import React, { useCallback, useContext } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, View } from 'react-native';

// Components
import LoadingIndicator from 'components/LoadingIndicator';
import Button from 'components/Button';
import Title from 'components/Title';
import LoginForm from 'screens/SignIn/components/LoginForm';

// Context
import { AuthenticationContext } from 'contexts/AuthContext';
import { SIGN_IN_SUCCESS, SIGN_IN_FAILED, SIGN_IN } from 'contexts/actions/auth';

// API
import { authService } from 'api/auth';

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
  const { authState, authDispatch } = useContext(AuthenticationContext);

  const { isProcessing } = authState || {};

  // handle action call api SignIn when user press Login button
  const handleSubmitButton = async (loginInfo: ILoginCredentials): Promise<void> => {
    authDispatch({ type: SIGN_IN });
    const { username, password } = loginInfo;
    try {
      const response = await authService.signIn(username, password);
      const data = JSON.stringify(response?.data);
      // set auth data info to local storage
      await set(AUTH_DATA, data);
      const user = response?.data?.user;
      const access_token = response?.data?.access_token;
      if (user && access_token) {
        authDispatch({
          type: SIGN_IN_SUCCESS,
          payload: {
            user,
            access_token
          }
        });
      }
    } catch (error) {
      authDispatch({ type: SIGN_IN_FAILED, payload: error });
      error?.response?.data
        ? Alert.alert(error.response.data.message)
        : Alert.alert('Login failed', error.message);
    }
  };

  // handle action when press goBack
  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, []);

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
          <View style={styles.loginForm}>
            {Boolean(isProcessing) && <LoadingIndicator />}
            {/* Form */}
            <LoginForm onSubmit={handleSubmitButton} />
            {/* end Form */}
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignInScreen;
