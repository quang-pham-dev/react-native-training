import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, TouchableOpacity, View } from 'react-native';
// Components
import Button from 'components/Button';
import Title from 'components/Title';
// Themes
import { IMAGES } from 'styles/themes';
import { AuthStackParams } from 'types/Navigation';
// Styles
import styles from './styles';

function GetStartedScreen({ navigation }: StackScreenProps<AuthStackParams, 'SignUp'>) {
  const handlePressBack = () => {
    navigation.goBack();
  };

  const handlePressNavigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handlePressCreateAnAccount = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconBackWrapper}>
          <Button icon={IMAGES.iconBack} iconStyles={[styles.iconBack]} onPress={handlePressBack} />
        </View>
        <Title titleStyles={styles.headerTitle} titleName='Let’s Get Started'></Title>
      </View>
      <View style={styles.main}>
        <Button
          text={'Facebook'}
          icon={IMAGES.iconFacebook}
          buttonStyles={[styles.socialButton, styles.facebookButton]}
          iconStyles={[styles.socialIcon]}
          textStyles={[styles.text]}
          onPress={() => {}}
        />
        <Button
          text={'Twitter'}
          icon={IMAGES.iconTwitter}
          buttonStyles={[styles.socialButton, styles.twitterButton]}
          iconStyles={[styles.socialIcon]}
          textStyles={[styles.text]}
          onPress={() => {}}
        />
        <Button
          text={'Google'}
          icon={IMAGES.iconGoogle}
          buttonStyles={[styles.socialButton, styles.googleButton]}
          iconStyles={[styles.socialIcon]}
          textStyles={[styles.text]}
          onPress={() => {}}
        />
      </View>
      {/* end main */}
      <View style={styles.footer}>
        <View style={styles.footerTextWrapper}>
          <Text style={styles.AlreadyText}>Already have an account? </Text>
          <TouchableOpacity onPress={handlePressNavigateToSignIn}>
            <Text style={styles.SignIn}>Signin</Text>
          </TouchableOpacity>
        </View>
        <Button
          text={'Create an Account'}
          buttonStyles={[styles.bottomButton, styles.createAnAccountButton]}
          textStyles={[styles.text, styles.textBottomButton]}
          onPress={handlePressCreateAnAccount}
        />
      </View>
      {/* end footer */}
    </View>
  );
}

export default GetStartedScreen;
