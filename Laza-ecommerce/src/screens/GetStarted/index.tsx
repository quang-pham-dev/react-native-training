import Button from 'components/Button';
import Title from 'components/Title';
import React from 'react';
import { Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
// Themes
import { Colors, Fonts, IMAGES } from 'styles/themes';
// Styles
import styles from './styles';

function GetStartedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconBackWrapper}>
          <Button icon={IMAGES.iconBack} iconStyles={[styles.iconBack]} />
        </View>
        <Title
          titleStyles={styles.headerTitle}
          titleName='Let’s Get Started'
          fontSize={Fonts.size.h5}
          fontFamily={Fonts.fontFamily.Inter_600SemiBold}
          color={Colors.textBlack}
        ></Title>
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
          <Link style={styles.SignIn} to={{ screen: 'SignIn' }}>
            Signin
          </Link>
        </View>
        <Button
          text={'Create an Account'}
          buttonStyles={[styles.bottomButton, styles.createAnAccountButton]}
          textStyles={[styles.text]}
          onPress={() => {}}
        />
      </View>
      {/* end footer */}
    </View>
  );
}

export default GetStartedScreen;
