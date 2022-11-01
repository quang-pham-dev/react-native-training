import React from 'react'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'

import {products} from '@constants'

import ProductList from './index'

declare let module: NodeModule

storiesOf('Product List', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Default', () => (
    <Story>
      <UseCase text="default">
        <ProductList
          products={products}
          onPressLikeProduct={action('clicked')}
          onPressProductCard={action('clicked')}
          onLoadMoreProduct={action('clicked')}
        />
      </UseCase>
    </Story>
  ))
