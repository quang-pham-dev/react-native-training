import * as React from 'react'
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import {number, text} from '@storybook/addon-knobs'

import ViewStyled from './View.styles'
import PStyled from '@components/Paragraph/P.styles'
import {PARAGRAPH_TYPE} from '@constants'

storiesOf('View', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('View Default', () => (
    <Story>
      <UseCase text="Default">
        <ViewStyled.Default
          w={number('Width', 300)}
          h={number('Height', 100)}
          bgColor={text('Background-color', 'green')}>
          <PStyled.Base type={PARAGRAPH_TYPE.BASE}>
            this is the content
          </PStyled.Base>
        </ViewStyled.Default>
      </UseCase>
    </Story>
  ))
