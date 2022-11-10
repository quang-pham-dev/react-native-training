import React, {useCallback} from 'react'

// Libs
import {Switch as SwitchLIB} from 'react-native-switch'

// Themes
import {Colors} from '@themes'

type SwitchProps = {
  value?: boolean
  disabled?: boolean
}

const Switch = ({value = true, disabled = false}: SwitchProps) => {
  const [isEnabled, setIsEnabled] = React.useState(value)

  const handleToggle = useCallback((event: boolean) => {
    setIsEnabled(event)
  }, [])

  return (
    <SwitchLIB
      value={isEnabled}
      onValueChange={handleToggle}
      circleSize={16}
      barHeight={18}
      disabled={disabled}
      circleBorderWidth={0}
      backgroundActive={Colors.palette.emerald}
      backgroundInactive={Colors.palette.alto}
      circleActiveColor={Colors.palette.white}
      circleInActiveColor={Colors.palette.white}
      changeValueImmediately={true}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2}
      switchRightPx={2}
      switchWidthMultiplier={2}
      switchBorderRadius={30}
    />
  )
}

export default Switch
