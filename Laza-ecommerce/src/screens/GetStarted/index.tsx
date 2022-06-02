import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';

// Components
import Button from 'components/Button';
import Title from 'components/Title';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

// Types
import { IGetStartedScreenProps } from 'types/screens/GetStarted';

// Themes
import IMAGES from 'themes/Images';

// Styles
import styles from './styles';

function GetStartedScreen({ navigation }: IGetStartedScreenProps) {
  // handle navigate to SignIn screen
  const handlePressSignInLink = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.AUTH_STACK.SIGN_IN_SCREEN.name);
  }, [navigation]);

  // handle go Back action
  const handlePressBackIcon = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconBackWrapper}>
          <Button
            icon={IMAGES.iconBack}
            iconStyles={[styles.iconBack]}
            onPress={handlePressBackIcon}
          />
        </View>
        <Title titleStyles={styles.headerTitle} titleName='Let’s Get Started'></Title>
      </View>
      <View style={styles.main}>
        <Button
          testID='facebookButton'
          text={'Facebook'}
          icon={IMAGES.iconFacebook}
          buttonStyles={[styles.socialButton, styles.facebookButton]}
          iconStyles={[styles.socialIcon]}
          textStyles={[styles.text]}
          onPress={() => {}}
        />
        <Button
          testID='TwitterButton'
          text={'Twitter'}
          icon={IMAGES.iconTwitter}
          buttonStyles={[styles.socialButton, styles.twitterButton]}
          iconStyles={[styles.socialIcon]}
          textStyles={[styles.text]}
          onPress={() => {}}
        />
        <Button
          testID='GoogleButton'
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
          <TouchableOpacity onPress={handlePressSignInLink} testID='LinkToSignIn'>
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

export default GetStartedScreen;
