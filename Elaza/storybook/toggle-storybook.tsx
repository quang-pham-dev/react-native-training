import React, {useState, useEffect, ReactElement} from 'react'
import {DevSettings} from 'react-native'
/**
 * Toggle Storybook mode, in __DEV__ mode only.
 *
 * In non-__DEV__ mode, or when Storybook isn't toggled on,
 * renders its children.
 *
 * The mode flag is persisted in async storage, which means it
 * persists across reloads/restarts - this is handy when developing
 * new components in Storybook.
 */
export const ToggleStorybook = ({children}: {children: ReactElement}) => {
  const [showStorybook, setShowStorybook] = useState<boolean>(false)
  const [StorybookUIRoot, setStorybookUIRoot] = useState<React.FC | null>(null)

  useEffect(() => {
    if (!__DEV__) {
      return undefined
    }

    // Load the setting from storage if it's there
    if (DevSettings) {
      // Add our toggle command to the menu
      DevSettings.addMenuItem('Toggle Storybook', () => {
        setShowStorybook(show => {
          // On toggle, flip the current value
          show = !show

          // Return it to change the local state
          return show
        })
        if (!showStorybook) {
          setStorybookUIRoot(() => require('./index').StorybookUIRoot)
        }
      })
    }
  }, [showStorybook])

  if (showStorybook) {
    return StorybookUIRoot ? <StorybookUIRoot /> : <></>
  }

  return children
}
