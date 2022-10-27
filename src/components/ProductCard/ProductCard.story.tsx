import React from 'react'
import {action} from '@storybook/addon-actions'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import {storiesOf} from '@storybook/react-native'

import {product} from '@constants/dataMock'

import ProductCard from './index'

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
