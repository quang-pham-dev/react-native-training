import * as React from 'react'
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import {number, text} from '@storybook/addon-knobs'
import {StyleSheet} from 'react-native'

// styled
import LayoutStyled from '../Layout/Layout.styles'
import HeadingStyled from '../Heading/Heading.styles'
import FlexStyled from '../Flex/Flex.styles'
import ViewStyled from '../View/View.styles'

// constants
import {HEADING_TYPE} from '@constants/type'

// themes
import {Colors} from '@themes/Colors'

declare let module: NodeModule

const styles = StyleSheet.create({
  layoutStyle: {
    height: 500,
  },
})

storiesOf('Layout', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Layout Main', () => (
    <Story>
      <UseCase text="Main">
        <LayoutStyled.Main>
          <HeadingStyled type={HEADING_TYPE.H1}>
            Lorem ipsum dolor sit a
          </HeadingStyled>
        </LayoutStyled.Main>
      </UseCase>
    </Story>
  ))
  .add('Layout Base', () => (
    <Story>
      <UseCase text="Base">
        <LayoutStyled.Base
          pHorizontal={number('Padding Horizontal', 20)}
          bgColor={text('Background color', 'gray')}
        />
      </UseCase>
    </Story>
  ))

  .add('Layout PaddingBottom35', () => (
    <Story>
      <UseCase text="PaddingBottom35" style={styles.layoutStyle}>
        <LayoutStyled.PaddingBottom35
          pHorizontal={number('Padding Horizontal', 20)}
          bgColor={text('Background color', 'white')}>
          <FlexStyled.Default flex={1} bgColor={Colors.palette.gray} />
          <ViewStyled.Default h={30} bgColor={Colors.palette.lightGray} />
        </LayoutStyled.PaddingBottom35>
      </UseCase>
    </Story>
  ))
  .add('Layout PaddingBottom38', () => (
    <Story>
      <UseCase text="PaddingBottom35" style={styles.layoutStyle}>
        <LayoutStyled.PaddingBottom38
          pHorizontal={number('Padding Horizontal', 20)}
          bgColor={text('Background color', 'white')}>
          <FlexStyled.Default flex={1} bgColor={Colors.palette.gray} />
          <ViewStyled.Default h={30} bgColor={Colors.palette.lightGray} />
        </LayoutStyled.PaddingBottom38>
      </UseCase>
    </Story>
  ))
