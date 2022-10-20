import * as React from 'react'
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import LoadingIndicator, {LoadingSize} from './index'
import {select} from '@storybook/addon-knobs'
import {Colors} from '@themes'

declare let module: NodeModule

const typesOption = [LoadingSize.SMALL, LoadingSize.LARGE]
const color = {...Colors}

storiesOf('LoadingIndicator', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Small', () => {
    const colorPick = select('color', Object.keys(color), 'whiteNavigation')
    return (
      <Story>
        <UseCase bgColor="#2a9fd8" text="Default">
          <LoadingIndicator
            size={select('size', typesOption, typesOption[0])}
            color={colorPick}
          />
        </UseCase>
      </Story>
    )
  })
  .add('Large', () => {
    const colorPick = select('color', Object.keys(color), 'red')
    return (
      <Story>
        <UseCase bgColor="#2a9fd8" text="Large">
          <LoadingIndicator
            size={select('size', typesOption, typesOption[0])}
            color={colorPick}
          />
        </UseCase>
      </Story>
    )
  })
