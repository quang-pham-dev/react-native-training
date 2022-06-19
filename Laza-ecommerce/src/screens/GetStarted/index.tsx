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
import Colors from 'themes/Colors';

// Styles
import styles from './styles';

function GetStartedScreen({ navigation }: IGetStartedScreenProps) {
  // handle navigate to SignIn screen
  const handlePressSignInLink = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.AUTH_STACK.SIGN_IN_SCREEN.name);
  }, []);

  // handle go Back action
  const handlePressBackIcon = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconBackWrapper}>
          <Button icon={IMAGES.iconBack} onPress={handlePressBackIcon} type='Circle' />
        </View>
        <Title titleStyles={styles.headerTitle} titleName='Let’s Get Started' />
      </View>
      {/* End of header */}

      <View style={styles.main}>
        <Button
          testID='facebookButton'
          backgroundColor={Colors.facebook}
          text={'Facebook'}
          icon={IMAGES.iconFacebook}
          type='Social'
        />
        <Button
          testID='TwitterButton'
          backgroundColor={Colors.twitter}
          text={'Twitter'}
          icon={IMAGES.iconTwitter}
          type='Social'
        />
        <Button
          testID='GoogleButton'
          backgroundColor={Colors.google}
          text={'Google'}
          icon={IMAGES.iconGoogle}
          type='Social'
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

        <Button text='Create an Account' type='Bottom' />
      </View>

      {/* end footer */}
    </View>
  );
}

export default GetStartedScreen;
