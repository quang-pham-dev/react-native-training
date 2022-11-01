import React, {useCallback} from 'react'
import {TouchableOpacity} from 'react-native'

// Libs
import {vs} from 'react-native-size-matters/extend'

// Components
import {BtnType, Button, SocialButton} from '@components/Button'

// Constants
import {HEADING_TYPE, PARAGRAPH_TYPE, SCREEN_NAMES} from '@constants'

// Styles
import LayoutStyled from '@components/Layout/Layout.styles'
import PStyled from '@components/Paragraph/P.styles'
import ViewStyled from '@components/View/View.styles'
import FlexStyled from '@components/Flex/Flex.styles'
import HeadingStyled from '@components/Heading/Heading.styles'

// Types
import {NavigationPropsType} from '@navigators/app-navigator'

// Themes
import {Colors, Icons, Metrics} from '@themes'

type GetStartedProps = {
  navigation: NavigationPropsType
}

const GetStarted = ({navigation}: GetStartedProps) => {
  // handle navigate to login screen
  const handlePressSignInLink = useCallback(() => {
    navigation.navigate(SCREEN_NAMES.LOGIN)
  }, [navigation])

  return (
    <>
      <LayoutStyled.Main>
        <ViewStyled.Custom pTop={vs(105)} pBottom={vs(185)}>
          <HeadingStyled textAlign="center" type={HEADING_TYPE.H1}>
            Let’s Get Started
          </HeadingStyled>
        </ViewStyled.Custom>

        <SocialButton
          type={BtnType.SOCIAL}
          icon={Icons.facebook}
          bgColor={Colors.palette.facebook}
          onPress={() => {}}
          label="Facebook"
        />
        <ViewStyled.Custom mVertical={Metrics.margin.small}>
          <SocialButton
            type={BtnType.SOCIAL}
            icon={Icons.google}
            bgColor={Colors.palette.google}
            onPress={() => {}}
            label="Google"
          />
        </ViewStyled.Custom>

        <SocialButton
          type={BtnType.SOCIAL}
          icon={Icons.twitter}
          bgColor={Colors.palette.twitter}
          onPress={() => {}}
          label="Twitter"
        />
      </LayoutStyled.Main>

      <FlexStyled.FlexEnd>
        <FlexStyled.RowCenter pBottom={Metrics.padding.large}>
          <PStyled.Center type={PARAGRAPH_TYPE.ALREADY_ACCOUNT}>
            {'Already have an account? '}
          </PStyled.Center>
          <TouchableOpacity onPress={handlePressSignInLink}>
            <PStyled.Center type={PARAGRAPH_TYPE.ALREADY_SIGN_IN}>
              Signin
            </PStyled.Center>
          </TouchableOpacity>
        </FlexStyled.RowCenter>

        <Button
          type={BtnType.BOTTOM}
          onPress={() => {}}
          label="Create an Account"
        />
      </FlexStyled.FlexEnd>
    </>
  )
}

export default GetStarted
