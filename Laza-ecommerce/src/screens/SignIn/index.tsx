import React, { useCallback } from 'react';
import { KeyboardAvoidingView, ScrollView, Switch, Text, View } from 'react-native';

// Components
import Button from 'components/Button';
import Title from 'components/Title';
import LoginForm from 'components/LoginForm';

// Types
import { ISignInScreenProps } from 'types/screens/SignIn';

// Themes
import IMAGES from 'themes/Images';

// Styles
import { styles } from './styles';

const SignInScreen = ({ navigation }: ISignInScreenProps) => {
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

          {/* Form */}
          <LoginForm />
          {/* end Form */}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignInScreen;
