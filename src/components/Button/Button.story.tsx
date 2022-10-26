import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {select, text} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'

import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import {Button, SocialButton, BtnType} from './index'
import {Colors, Icons, Metrics} from '@themes'
import ViewStyled from '@components/View/View.styles'

const typesOption = Object.values(BtnType)

declare let module: NodeModule

storiesOf('Button', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Bottom', () => (
    <Story>
      <UseCase text="Button with type bottom">
        <Button
          onPress={action('Pressed!')}
          type={select('type', typesOption, typesOption[0])}
          label={text('text', 'Title for Button')}
        />
      </UseCase>
    </Story>
  ))
  .add('Social', () => (
    <Story>
      <UseCase text="Button with type social">
        <SocialButton
          type={select('type', typesOption, typesOption[1])}
          icon={Icons.google}
          bgColor={Colors.palette.google}
          onPress={action('Pressed!')}
          label={text('text', 'Google')}
        />
        <ViewStyled.Custom mVertical={Metrics.margin.small}>
          <SocialButton
            type={select('type', typesOption, typesOption[1])}
            icon={Icons.facebook}
            bgColor={Colors.palette.facebook}
            onPress={action('Pressed!')}
            label={text('text', 'Facebook')}
          />
        </ViewStyled.Custom>
        <SocialButton
          type={select('type', typesOption, typesOption[1])}
          icon={Icons.twitter}
          bgColor={Colors.palette.twitter}
          onPress={action('Pressed!')}
          label={text('text', 'Twitter')}
        />
      </UseCase>
    </Story>
  ))
  .add('Disable Button', () => (
    <Story>
      <UseCase text="Button disabled">
        <Button
          onPress={action('Pressed!')}
          type={select('type', typesOption, typesOption[0])}
          label={text('text', 'Title for Button')}
          disabled
        />
      </UseCase>
    </Story>
  ))
  .add('Loading Button', () => (
    <Story>
      <UseCase text="Button loading">
        <Button
          onPress={action('Pressed!')}
          type={select('type', typesOption, typesOption[0])}
          label={text('text', 'Title for Button')}
          isLoading
        />
      </UseCase>
    </Story>
  ))
