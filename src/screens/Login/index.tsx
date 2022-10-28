import React, {lazy, Suspense, useCallback, useLayoutEffect} from 'react'
import {TouchableOpacity} from 'react-native'

// Libs
import {s, vs} from 'react-native-size-matters/extend'

// Components
import LoadingIndicator from '@components/LoadingIndicator'
import {ErrorBoundary, ErrorMode} from '@components'

// Styles
import HeadingStyled from '@components/Heading/Heading.styles'
import IconStyled from '@components/Icon/Icon.styles'
import LayoutStyled from '@components/Layout/Layout.styles'
import ViewStyled from '@components/View/View.styles'

// Types
import {NavigationPropsType} from '@navigators/app-navigator'

// Constants
import {HEADING_TYPE} from '@constants'

// Themes
import {Icons, Metrics} from '@themes'

// Splitting lazy load component
export const LoginFormLazy = lazy(
  () => import('@screens/Login/components/LoginForm'),
)

type LoginProps = {
  navigation: NavigationPropsType
}

const Login = ({navigation}: LoginProps) => {
  // handle action call api Login when user press Login button
  const handleSubmitButton = () => {}
  const handleBackArrow = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={handleBackArrow}>
          <IconStyled width={s(45)} height={s(45)} source={Icons.back} />
        </TouchableOpacity>
      ),
    })
  }, [handleBackArrow, navigation])

  return (
    <ErrorBoundary errorMode={ErrorMode.ALWAYS}>
      <LayoutStyled.Main>
        <ViewStyled.Custom pTop={vs(105)} pBottom={vs(164)}>
          <HeadingStyled textAlign="center" type={HEADING_TYPE.H1}>
            Welcome
          </HeadingStyled>
          <ViewStyled.Custom pTop={vs(Metrics.padding.tiny)}>
            <HeadingStyled textAlign="center" type={HEADING_TYPE.H4}>
              Please enter your data to continue
            </HeadingStyled>
          </ViewStyled.Custom>
        </ViewStyled.Custom>
        {/* end header */}
      </LayoutStyled.Main>
      {/* Form */}
      <Suspense fallback={<LoadingIndicator />}>
        <LoginFormLazy onSubmit={handleSubmitButton} />
      </Suspense>
      {/* end Form */}
    </ErrorBoundary>
  )
}

export default Login
