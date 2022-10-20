import * as React from 'react'
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import HeadingStyled from './Heading.styles'
import {select, text} from '@storybook/addon-knobs'

declare let module: NodeModule

const typesOption = ['h1', 'h2', 'h3']

storiesOf('Heading', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('H1 Style', () => (
    <Story>
      <UseCase bgColor="#2a9fd8" text="H1">
        <HeadingStyled type={select('type', typesOption, typesOption[0])}>
          {text('text', 'Title for H1')}
        </HeadingStyled>
      </UseCase>
    </Story>
  ))
  .add('H2 style', () => (
    <Story>
      <UseCase bgColor="#2a9fd8" text="H2">
        <HeadingStyled type={select('type', typesOption, typesOption[1])}>
          {text('text', 'Title for H2')}
        </HeadingStyled>
      </UseCase>
    </Story>
  ))
  .add('H3 style', () => (
    <Story>
      <UseCase bgColor="#2a9fd8" text="h3">
        <HeadingStyled type={select('type', typesOption, typesOption[2])}>
          {text('text', 'Title for H3')}
        </HeadingStyled>
      </UseCase>
    </Story>
  ))
