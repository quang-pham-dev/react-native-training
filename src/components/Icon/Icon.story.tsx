import * as React from 'react'
import {storiesOf} from '@storybook/react-native'
import {select} from '@storybook/addon-knobs'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import IconStyled from './Icon.styles'
import {Icons} from '@themes/Images'
import Metrics from '@themes/Metrics'
import {SIZE} from '@constants/type'

const transformOptions = [
  Metrics.rotate.left,
  Metrics.rotate.bottom,
  Metrics.rotate.right,
  Metrics.rotate.top,
]

const sizeOptions = [SIZE.TINY, SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]

declare let module: NodeModule

storiesOf('Icon', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Icon with size', () => (
    <Story>
      <UseCase text="Icon with size">
        <IconStyled
          type={select('size', sizeOptions, sizeOptions[2])}
          source={Icons.back}
          transform={select('transform', transformOptions, transformOptions[0])}
        />
      </UseCase>
    </Story>
  ))
