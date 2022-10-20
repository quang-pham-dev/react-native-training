import React from 'react'
import {withKnobs} from '@storybook/addon-knobs'

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native'
import './rn-addons'

declare let module: NodeModule

addDecorator(withKnobs)

configure(() => {
  require('./storybook-registry')
}, module)

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
  onDeviceUI: true,
  asyncStorage:
    require('@react-native-async-storage/async-storage').default || null,
})

export const StorybookUIRoot = () => <StorybookUI />
