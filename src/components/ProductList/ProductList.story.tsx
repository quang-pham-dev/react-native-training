import React from 'react'

// Storybook
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'

// Components
import ProductList from './index'

// Constants
import {products} from '@constants'

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
          onLoadMoreProducts={action('clicked')}
        />
      </UseCase>
    </Story>
  ))
