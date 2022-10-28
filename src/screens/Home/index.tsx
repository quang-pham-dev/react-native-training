import React, {useLayoutEffect} from 'react'

// Styles
import LayoutStyled from '@components/Layout/Layout.styles'
import PStyled from '@components/Paragraph/P.styles'

// Constants
import {PARAGRAPH_TYPE} from '@constants'

// Types
import {NavigationPropsType} from '@navigators/app-navigator'

type AccountNumberScreenNavigationProps = {
  navigation: NavigationPropsType
}

const Home = ({navigation}: AccountNumberScreenNavigationProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: true,
      headerTitle: () => (
        <PStyled.Center type={PARAGRAPH_TYPE.TINY}>Home</PStyled.Center>
      ),
    })
  }, [navigation])

  return (
    <LayoutStyled.Main>
      <PStyled.Base>Home Screen</PStyled.Base>
    </LayoutStyled.Main>
  )
}

export default Home
