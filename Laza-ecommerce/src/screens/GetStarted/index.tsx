import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
// Components
import Button from 'components/Button';
import Title from 'components/Title';
// Themes
import { IMAGES } from 'styles/themes';
// Types
import { GetStartedScreenProps } from 'types/Screens';
// Constants
import Screens from 'constants/Screens';
// Styles
import styles from './styles';

function GetStartedScreen({ navigation }: GetStartedScreenProps) {
  // handle navigate to SignIn screen
  const handlePressNavigateToSignIn = () => {
    navigation.navigate(Screens.SignIn.name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconBackWrapper}>
          <Button icon={IMAGES.iconBack} iconStyles={[styles.iconBack]} onPress={() => {}} />
        </View>
        <Title titleStyles={styles.headerTitle} titleName='Let’s Get Started'></Title>
      </View>
      <View style={styles.main}>
        <Button
          testID='buttonFacebook'
          text={'Facebook'}
          icon={IMAGES.iconFacebook}
          buttonStyles={[styles.socialButton, styles.facebookButton]}
          iconStyles={[styles.socialIcon]}
          textStyles={[styles.text]}
          onPress={() => {}}
        />
        <Button
          testID='buttonTwitter'
          text={'Twitter'}
          icon={IMAGES.iconTwitter}
          buttonStyles={[styles.socialButton, styles.twitterButton]}
          iconStyles={[styles.socialIcon]}
          textStyles={[styles.text]}
          onPress={() => {}}
        />
        <Button
          testID='buttonGoogle'
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
          <Title titleStyles={styles.alreadyText} titleName='Already have an account? ' />
          <TouchableOpacity onPress={handlePressNavigateToSignIn} testID='LinkToSignIn'>
            <Title titleStyles={styles.signIn} titleName='Signin' />
          </TouchableOpacity>
        </View>
        <Button
          text={'Create an Account'}
          buttonStyles={[styles.bottomButton, styles.createAnAccountButton]}
          textStyles={[styles.text, styles.textBottomButton]}
          onPress={() => {}}
        />
      </View>
      {/* end footer */}
    </View>
  );
}

export default memo(GetStartedScreen);
