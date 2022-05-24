import React, { memo, useCallback } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import isEqual from 'react-fast-compare';

// Types
import { ISearchBarProps } from 'types/components/Search';

// Themes
import IMAGES from 'themes/Images';

// Styles
import styles from './styles';

const SearchBar = ({
  value,
  autoFocus,
  textInputStyles = {},
  onChangeText = () => {},
  onSubmitEditing,
}: ISearchBarProps) => {
  const [valueState, setValueState] = React.useState(value);

  const onChangeTextHandler = useCallback(
    (text: string) => {
      setValueState(text);
      onChangeText(text);
    },
    [onChangeText, setValueState],
  );

  const onSubmitEditingHandler = useCallback(() => {
    onSubmitEditing();
  }, [onSubmitEditing, valueState]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.inputWrapper}>
          <TouchableOpacity onPress={() => {}} style={styles.iconSearchWrapper}>
            <Image style={styles.iconSearch} source={IMAGES.iconSearch} />
          </TouchableOpacity>
          <TextInput
            style={[styles.input, textInputStyles]}
            placeholder='Search..'
            autoFocus={autoFocus}
            autoCorrect={false}
            value={valueState}
            onChangeText={onChangeTextHandler}
            onSubmitEditing={onSubmitEditingHandler}
          />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.iconVoiceWrapper}>
          <Image style={styles.iconVoice} source={IMAGES.iconVoice} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(SearchBar, isEqual);
