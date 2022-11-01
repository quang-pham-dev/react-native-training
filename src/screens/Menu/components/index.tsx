import React, {useCallback} from 'react'
import {Pressable, ImageSourcePropType} from 'react-native'

// LIBS
import {s} from 'react-native-size-matters'

// Styles
import FlexStyled from '@components/Flex/Flex.styles'
import IconStyled from '@components/Icon/Icon.styles'
import ViewStyled from '@components/View/View.styles'
import PStyled from '@components/Paragraph/P.styles'

// Constants
import {PARAGRAPH_TYPE} from '@constants'

// Themes
import {Metrics} from '@themes'

export interface DrawerItemProps {
  testID?: string
  title: string
  onPress?: () => void
  source: ImageSourcePropType
}

const DrawerItem = ({title, source, onPress = () => {}}: DrawerItemProps) => {
  const handlePressItem = useCallback(() => {
    onPress()
  }, [onPress])
  return (
    <Pressable onPress={handlePressItem}>
      <ViewStyled.Custom pTop={Metrics.padding.large}>
        <FlexStyled.RowCenterHorizontal>
          <IconStyled source={source} />
          <PStyled.Base type={PARAGRAPH_TYPE.PROFILE_ITEM} mLeft={s(13)}>
            {title}
          </PStyled.Base>
        </FlexStyled.RowCenterHorizontal>
      </ViewStyled.Custom>
    </Pressable>
  )
}

export default DrawerItem
