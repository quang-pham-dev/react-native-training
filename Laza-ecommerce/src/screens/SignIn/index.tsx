import React, { useCallback } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, View } from 'react-native';

// Components
import LoadingIndicator from 'components/LoadingIndicator';
import Button from 'components/Button';
import Title from 'components/Title';

// Context
import { useAuthContext } from 'contexts/auth/AuthContext';
import { SIGN_IN_SUCCESS, SIGN_IN_FAILED, SIGN_IN } from 'contexts/auth/actions/auth';

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

// Splitting lazy load component
const LoginFormLazy = React.lazy(() => import('screens/SignIn/components/LoginForm'));

const SignInScreen = ({ navigation }: ISignInScreenProps) => {
  const { authState, authDispatch } = useAuthContext();

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
              <Button icon={IMAGES.iconBack} onPress={handlePressBack} type='Circle' />
            </View>
            <Title.HeadingPage style={styles.headerTitle} titleName='Welcome' titleAlign='center' />
            <Title.subHeadingPage
              style={styles.headerSubTitle}
              titleAlign='center'
              titleName='Please enter your data to continue'
            />
          </View>
          {/* end header */}
          <View style={styles.loginForm}>
            {Boolean(isProcessing) && <LoadingIndicator />}
            {/* Form */}
            <React.Suspense fallback={<LoadingIndicator />}>
              <LoginFormLazy onSubmit={handleSubmitButton} />
            </React.Suspense>
            {/* end Form */}
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignInScreen;
