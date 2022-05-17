import React, { memo } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
// Theme
import { IMAGES } from 'styles/themes';
// Types
import { SearchBarProps } from 'types/Search';
// Styles
import styles from './styles';

const SearchBar = ({
  value,
  autoFocus,
  textInputStyles = {},
  onChangeText = () => {},
  onSubmitEditing,
}: SearchBarProps) => (
  <View style={styles.container}>
    <View style={styles.searchBarContainer}>
      <View style={styles.inputWrapper}>
        <TouchableOpacity onPress={() => {}} style={styles.iconSearchWrapper}>
          <Image style={styles.iconSearch} source={IMAGES.iconSearch} />
        </TouchableOpacity>
        <TextInput
          style={[styles.input, textInputStyles]}
          placeholder='Search..'
          value={value}
          onChangeText={onChangeText}
          autoFocus={autoFocus}
          autoCorrect={false}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.iconVoiceWrapper}>
        <Image style={styles.iconVoice} source={IMAGES.iconVoice} />
      </TouchableOpacity>
    </View>
  </View>
);

export default memo(SearchBar);
