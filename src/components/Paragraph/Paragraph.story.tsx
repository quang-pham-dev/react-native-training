// Libs
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react-native'
import {select, text} from '@storybook/addon-knobs'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'

// Themes
import {Colors} from '@themes'

// Constants
import {PARAGRAPH_TYPE} from '@constants'

// Styles
import PStyled from './P.styles'

declare let module: NodeModule

const typesOption = [
  PARAGRAPH_TYPE.TINY,
  PARAGRAPH_TYPE.SMALL,
  PARAGRAPH_TYPE.MEDIUM,
  PARAGRAPH_TYPE.LARGER,
]

storiesOf('Paragraph', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Paragraph with default Tiny type', () => (
    <Story>
      <UseCase bgColor={Colors.palette.white} text="Paragraph Tiny type">
        <PStyled.Base type={select('type', typesOption, PARAGRAPH_TYPE.TINY)}>
          {text('paragraph', 'Paragraph Tiny type')}
        </PStyled.Base>
      </UseCase>
    </Story>
  ))
  .add('Paragraph with text align center', () => (
    <Story>
      <UseCase bgColor={Colors.palette.white} text="Paragraph align center">
        <PStyled.Center type={select('type', typesOption, typesOption[2])}>
          {text('paragraph', 'Text align center')}
        </PStyled.Center>
      </UseCase>
    </Story>
  ))
  .add('Paragraph with text align right', () => (
    <Story>
      <UseCase bgColor={Colors.palette.white} text="Paragraph align right">
        <PStyled.Right type={select('type', typesOption, typesOption[2])}>
          {text('paragraph', 'Text align right')}
        </PStyled.Right>
      </UseCase>
    </Story>
  ))

  .add('Paragraph with font family base', () => (
    <Story>
      <UseCase bgColor={Colors.palette.white} text="Paragraph align right">
        <PStyled.TFamilyRegular
          type={select('type', typesOption, typesOption[2])}>
          {text('paragraph', 'Text align right')}
        </PStyled.TFamilyRegular>
      </UseCase>
    </Story>
  ))

  .add('Paragraph with font family bold', () => (
    <Story>
      <UseCase bgColor={Colors.palette.white} text="Paragraph align right">
        <PStyled.TFamilyBold type={select('type', typesOption, typesOption[2])}>
          {text('paragraph', 'Text align right')}
        </PStyled.TFamilyBold>
      </UseCase>
    </Story>
  ))

  .add('Paragraph with  font family medium', () => (
    <Story>
      <UseCase bgColor={Colors.palette.white} text="Paragraph align right">
        <PStyled.TFamilySemiBold
          type={select('type', typesOption, typesOption[2])}>
          {text('paragraph', 'Text align right')}
        </PStyled.TFamilySemiBold>
      </UseCase>
    </Story>
  ))
