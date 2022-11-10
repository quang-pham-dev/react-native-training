import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import {select} from '@storybook/addon-knobs'

// Components
import LoadingIndicator, {LoadingSize} from './index'

// Themes
import {Colors} from '@themes'

declare let module: NodeModule

const typesOption = [LoadingSize.SMALL, LoadingSize.LARGE]
const color = {...Colors}

storiesOf('LoadingIndicator', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Small', () => {
    const colorPick = select('color', Object.keys(color), '#3D93F8')
    return (
      <Story>
        <UseCase bgColor={Colors.palette.lightGray} text="Default">
          <LoadingIndicator
            size={select('size', typesOption, typesOption[0])}
            color={colorPick}
          />
        </UseCase>
      </Story>
    )
  })
  .add('Large', () => {
    const colorPick = select('color', Object.keys(color), '#FF7043')
    return (
      <Story>
        <UseCase bgColor={Colors.palette.lightGray} text="Large">
          <LoadingIndicator
            size={select('size', typesOption, typesOption[0])}
            color={colorPick}
          />
        </UseCase>
      </Story>
    )
  })
