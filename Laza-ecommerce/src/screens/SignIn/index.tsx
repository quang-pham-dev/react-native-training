import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Switch, Text, View } from 'react-native';
// Lib
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
// Components
import Button from 'components/Button';
import Title from 'components/Title';
import TextInput from 'components/TextInput';
// Hooks
import useAuth from 'hooks/useAuth';
// Themes
import { IMAGES } from 'styles/themes';
// Styles
import { styles } from './styles';
// Types
import { LoginBody } from 'types/Auth';
import { SignInScreenProps } from 'types/Screens';

// initial values
const loginFormInit: LoginBody = {
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

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { signIn } = useAuth();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>({
    mode: 'onTouched',
    defaultValues: loginFormInit,
    resolver: yupResolver(loginSchema),
  });

  // handle action call api SignIn when user press Login button
  const handOnSubmit: SubmitHandler<LoginBody> = async (loginInfo: LoginBody) => {
    const { username, password } = loginInfo;
    try {
      await signIn(username, password);
    } catch (error) {
      // reset form
      reset(loginFormInit);
      console.log(error);
    }
  };

  // handle action when press goBack
  const handlePressBack = () => {
    navigation.goBack();
  };

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
              titleName='Please enter your data to continue'
            ></Title>
          </View>
          {/* end header */}

          <View style={styles.main}>
            {/* Username */}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  onChangeText={value => onChange(value)}
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
              <Text testID='usernameInputError' style={styles.errorMessage}>
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
                  onChangeText={value => onChange(value)}
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

          {/* end main */}
          <View style={styles.footer}>
            <View style={styles.footerTextWrapper}>
              <Text style={styles.condition}>
                By connecting your account confirm that you agree with our
                <Text style={styles.Term}> Term and Condition</Text>
              </Text>
            </View>
            <Button
              text='Login'
              buttonStyles={[styles.bottomButton, styles.loginButton]}
              textStyles={[styles.textBottomButton]}
              onPress={handleSubmit(handOnSubmit)}
            />
          </View>
          {/* end footer */}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignInScreen;
