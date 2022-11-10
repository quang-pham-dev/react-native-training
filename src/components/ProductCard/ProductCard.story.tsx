import React from 'react'

// Storybook
import {action} from '@storybook/addon-actions'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import {storiesOf} from '@storybook/react-native'

// Components
import ProductCard from './index'

// Constants
import {product} from '@constants'

declare let module: NodeModule

storiesOf('Product Card', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Default', () => (
    <Story>
      <UseCase text="default">
        <ProductCard
          product={product}
          onPressProductCard={action('clicked')}
          onPressLikeProduct={action('clicked')}
        />
      </UseCase>
    </Story>
  ))
