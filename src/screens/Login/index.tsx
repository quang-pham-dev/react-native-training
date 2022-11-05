import React, {lazy, Suspense, useCallback, useLayoutEffect} from 'react'
import {Alert, TouchableOpacity} from 'react-native'

// Libs
import {s, vs} from 'react-native-size-matters/extend'

// Contexts
import {useAuthContext} from '@contexts/auth/AuthContext'
import {
  SIGN_IN,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
} from '@contexts/auth/action/auth'

// Components
import LoadingIndicator from '@components/LoadingIndicator'
import {ErrorBoundary, ErrorMode} from '@components'

// Styles
import HeadingStyled from '@components/Heading/Heading.styles'
import IconStyled from '@components/Icon/Icon.styles'
import ViewStyled from '@components/View/View.styles'
import AnimatedKeyboard from '@components/AnimatedKeyboard'

// Navigator
import {NavigationPropsType} from '@navigators/app-navigator'

// Constants
import {AUTH_DATA, HEADING_TYPE} from '@constants'

// Themes
import {Icons, Metrics} from '@themes'

// Types
import {LoginCredentials} from '@model-types'

// Api
import {authService} from '@apis'

// Services
import {set} from '@services'

// Splitting lazy load component
export const LoginFormLazy = lazy(
  () => import('@screens/Login/components/LoginForm'),
)

type LoginProps = {
  navigation: NavigationPropsType
}

const Login = ({navigation}: LoginProps) => {
  const {dispatch} = useAuthContext()

  // handle action call api Login when user press Login button
  const handleSubmitButton = async (
    loginInfo: LoginCredentials,
  ): Promise<void> => {
    dispatch({type: SIGN_IN})

    const {username, password} = loginInfo

    try {
      const response = await authService.signIn(username, password)
      const dataStorage = JSON.stringify(response?.data)
      // set auth data info to local storage
      await set(AUTH_DATA, dataStorage)
      const user = response?.data?.user
      const access_token = response?.data
      if (user && access_token) {
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: {
            user,
            access_token,
          },
        })
      }
    } catch (error: any) {
      dispatch({type: SIGN_IN_FAILED, payload: error})
      error?.response?.data
        ? Alert.alert(error.response.data.message)
        : Alert.alert('Login failed', error.message)
    }
  }
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
      <>
        <AnimatedKeyboard>
          <>
            <ViewStyled.Custom flex={1} pTop={vs(105)}>
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

            {/* Form */}
            <Suspense fallback={<LoadingIndicator />}>
              <ViewStyled.Custom flex={2} pTop={vs(30)}>
                <LoginFormLazy onSubmit={handleSubmitButton} />
              </ViewStyled.Custom>
            </Suspense>
            {/* end Form */}
          </>
        </AnimatedKeyboard>
      </>
    </ErrorBoundary>
  )
}

export default Login
