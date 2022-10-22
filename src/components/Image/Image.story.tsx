import * as React from 'react'

import {storiesOf} from '@storybook/react-native'
import {select} from '@storybook/addon-knobs'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'

// Styled
import {Image} from './Image.styles'

// Themes
import {Images} from '@themes/Images'

declare let module: NodeModule

const images = {...Images}

storiesOf('Image', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Normal', () => {
    const image = select('source', Object.keys(images), 'splash')

    return (
      <Story>
        <UseCase text="Image normal">
          <Image.Normal
            source={images[image as keyof typeof Images]}
            height={230}
          />
        </UseCase>
      </Story>
    )
  })
