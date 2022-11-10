import * as React from 'react'

// StoryBook
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'

// Styles
import FlexStyled from './Flex.styles'
import ViewStyled from '../View/View.styles'

declare let module: NodeModule

storiesOf('Flex', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('FlexStyled default', () => (
    <Story>
      <UseCase text="Default">
        <FlexStyled.Default flex={1}>
          <ViewStyled.Border10 w={50} h={50} bgColor="green" mRight={20} />
          <ViewStyled.Border10 w={50} h={50} bgColor="red" mRight={20} />
          <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
        </FlexStyled.Default>
      </UseCase>
    </Story>
  ))
  .add('FlexStyled Center', () => (
    <Story>
      <UseCase text="Center">
        <ViewStyled.Border10 w={200} h={200} bgColor="gray">
          <FlexStyled.Center flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="red" />
          </FlexStyled.Center>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))

  .add('FlexStyled CenterHorizontal', () => (
    <Story>
      <UseCase text="CenterHorizontal">
        <ViewStyled.Border10 w={200} h={200} bgColor="gray">
          <FlexStyled.CenterHorizontal flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="red" />
          </FlexStyled.CenterHorizontal>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))
  .add('FlexStyled CenterVertical', () => (
    <Story>
      <UseCase text="CenterVertical">
        <ViewStyled.Border10 w="100%" h={200} bgColor="gray">
          <FlexStyled.CenterVertical flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="red" />
          </FlexStyled.CenterVertical>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))

  .add('FlexStyled Row', () => (
    <Story>
      <UseCase text="Row">
        <ViewStyled.Border10
          w="100%"
          h={200}
          bgColor="gray"
          pHorizontal={30}
          pVertical={30}>
          <FlexStyled.Row flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="green" mRight={20} />
            <ViewStyled.Border10 w={50} h={50} bgColor="red" mRight={20} />
            <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
          </FlexStyled.Row>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))
  .add('FlexStyled RowCenterHorizontal', () => (
    <Story>
      <UseCase text="RowCenterHorizontal">
        <ViewStyled.Border10
          w="100%"
          h={200}
          bgColor="gray"
          pHorizontal={30}
          pVertical={30}>
          <FlexStyled.RowCenterHorizontal flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="green" mRight={20} />
            <ViewStyled.Border10 w={50} h={50} bgColor="red" mRight={20} />
            <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
          </FlexStyled.RowCenterHorizontal>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))
  .add('FlexStyled RowCenter', () => (
    <Story>
      <UseCase text="RowCenter">
        <ViewStyled.Border10 w="100%" h={200} bgColor="gray">
          <FlexStyled.RowCenter flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="green" mRight={20} />
            <ViewStyled.Border10 w={50} h={50} bgColor="red" mRight={20} />
            <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
          </FlexStyled.RowCenter>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))
  .add('FlexStyled Wrap', () => (
    <Story>
      <UseCase text="Wrap">
        <ViewStyled.Border10 w={200} h={100} bgColor="gray">
          <FlexStyled.Wrap flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="green" />
            <ViewStyled.Border10 w={50} h={50} bgColor="red" />
            <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
            <ViewStyled.Border10 w={50} h={50} bgColor="black" />
            <ViewStyled.Border10 w={50} h={50} bgColor="blue" />
            <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
          </FlexStyled.Wrap>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))

  .add('FlexStyled FlexEnd', () => (
    <Story>
      <UseCase text="FlexEnd">
        <ViewStyled.Border10 w="100%" h={200} bgColor="gray">
          <FlexStyled.FlexEnd flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="green" mRight={20} />
            <ViewStyled.Border10 w={50} h={50} bgColor="red" mRight={20} />
            <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
          </FlexStyled.FlexEnd>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))

  .add('FlexStyled ItemsStart', () => (
    <Story>
      <UseCase text="Flex alignItems Start">
        <ViewStyled.Border10 w="100%" h={200} bgColor="gray">
          <FlexStyled.ItemsStart flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="green" />
            <ViewStyled.Border10 w={50} h={50} bgColor="red" />
            <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
          </FlexStyled.ItemsStart>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))

  .add('FlexStyled ItemsEnd', () => (
    <Story>
      <UseCase text="Flex alignItems End">
        <ViewStyled.Border10 w="100%" h={200} bgColor="gray">
          <FlexStyled.ItemsEnd flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="green" />
            <ViewStyled.Border10 w={50} h={50} bgColor="red" />
            <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
          </FlexStyled.ItemsEnd>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))

  .add('FlexStyled space-around', () => (
    <Story>
      <UseCase text="Flex justify-content space-around">
        <ViewStyled.Border10 w="100%" h={200} bgColor="gray">
          <FlexStyled.FlexSpaceAround flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="green" />
            <ViewStyled.Border10 w={50} h={50} bgColor="red" />
            <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
          </FlexStyled.FlexSpaceAround>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))

  .add('FlexStyled space-between', () => (
    <Story>
      <UseCase text="Flex justify-content space-around">
        <ViewStyled.Border10 w="100%" h={200} bgColor="gray">
          <FlexStyled.FlexSpaceBetween flex={1}>
            <ViewStyled.Border10 w={50} h={50} bgColor="green" />
            <ViewStyled.Border10 w={50} h={50} bgColor="red" />
            <ViewStyled.Border10 w={50} h={50} bgColor="yellow" />
          </FlexStyled.FlexSpaceBetween>
        </ViewStyled.Border10>
      </UseCase>
    </Story>
  ))
