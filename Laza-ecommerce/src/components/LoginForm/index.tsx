import React, { memo, useContext, useState } from 'react';
import { Alert, Switch, Text, View } from 'react-native';
import isEqual from 'react-fast-compare';

// LIB
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

// Components
import Button from 'components/Button';
import TextInput from 'components/TextInput';
import LoadingIndicator from 'components/LoadingIndicator';

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
import { IUserSignIn } from 'types/models/User';
import { LOADING_SIZE } from 'types/common/Enums';

// Styles
import { styles } from './styles';

// initial values
const loginFormInit: IUserSignIn = {
  username: '',
  password: '',
};

// validation schema
const loginSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
}).required();

const LoginForm = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { authState, authDispatch } = useContext(AppContext);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSignIn>({
    mode: 'onChange',
    defaultValues: loginFormInit,
    resolver: yupResolver(loginSchema),
  });

  // handle action call api SignIn when user press Login button
  const handOnSubmit: SubmitHandler<IUserSignIn> = async (loginInfo: IUserSignIn) => {
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
      // reset form
      reset(loginFormInit);
    }
  };

  return (
    <>
      {authState?.isProcessing && <LoadingIndicator size={LOADING_SIZE.LARGE} />}
      <View style={styles.main}>
        {/* Username */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={(value: string) => onChange(value)}
              value={value}
              textInputStyles={styles.input}
              label='Username'
              labelStyle={styles.inputTitle}
              placeholder='Enter your username'
              testID='usernameInput'
            />
          )}
          name='username'
        />
        {errors.username && (
          <Text testID='usernameInputError' accessibilityRole='text' style={styles.errorMessage}>
            {errors.username?.message}
          </Text>
        )}

        {/* Password */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={(value: string) => onChange(value)}
              value={value}
              textInputStyles={styles.input}
              label='Password'
              labelStyle={styles.inputTitle}
              secureTextEntry
              placeholder='Enter your password'
              testID='passwordInput'
            />
          )}
          name='password'
        />
        {errors.password && (
          <Text testID='passwordInputError' style={styles.errorMessage}>
            {errors.password?.message}
          </Text>
        )}

        <View style={styles.forgotPasswordWrap}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>
        <View style={styles.rememberMeWrap}>
          <Text style={styles.rememberMeText}>Remember me</Text>
          <Switch
            style={styles.rememberMeSwitch}
            trackColor={{ false: '#767577', true: '#34C759' }}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerTextWrapper}>
          <Text style={styles.condition}>
            By connecting your account confirm that you agree with our
            <Text style={styles.Term}> Term and Condition</Text>
          </Text>
        </View>

        <Button
          testID='loginButton'
          text='Login'
          buttonStyles={[styles.bottomButton, styles.loginButton]}
          textStyles={[styles.textBottomButton]}
          onPress={handleSubmit(handOnSubmit)}
        />
      </View>
    </>
  );
};

export default memo(LoginForm, isEqual);
