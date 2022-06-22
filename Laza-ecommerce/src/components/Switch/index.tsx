import React, { useCallback } from 'react';
import { View, Switch as RNSwitch } from 'react-native';

// Themes
import Colors from 'themes/Colors';

// Types
import { ISwitchProps } from 'types/components/Switch';

// Styles
import styles from './styles';

const Switch = ({ onToggle, value = true }: ISwitchProps) => {
  const [isEnabled, setIsEnabled] = React.useState(value);

  const handleToggle = useCallback((event: boolean) => {
    setIsEnabled(event);
  }, []);

  const trackColor = {
    false: Colors.lightGray,
    true: Colors.lightGreen
  };

  return (
    <View>
      <RNSwitch
        style={styles.switch}
        trackColor={trackColor}
        thumbColor={isEnabled ? Colors.white : Colors.lightGray}
        ios_backgroundColor={Colors.lightGray}
        onValueChange={handleToggle}
        value={isEnabled}
      />
    </View>
  );
};

export default Switch;
