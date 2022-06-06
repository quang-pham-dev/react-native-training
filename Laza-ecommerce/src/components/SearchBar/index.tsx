import React, { memo, useCallback, useContext } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Context
import { ProductsContext } from 'context/ProductsContext';
import { SEARCH_PRODUCTS_VALUE } from 'context/actions/products';

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
  onSubmitEditing,
}: ISearchBarProps) => {
  const { productDispatch } = useContext(ProductsContext);

  const [valueState, setValueState] = React.useState<string>('');

  const handleTextChange = useCallback(
    (text: string) => {
      setValueState(text);
      productDispatch({ type: SEARCH_PRODUCTS_VALUE, searchValue: text });
    },
    [setValueState],
  );

  const handleSubmitEditing = useCallback(() => {
    onSubmitEditing();
  }, [onSubmitEditing, valueState]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.inputWrapper}>
          <TouchableOpacity onPress={handleSubmitEditing} style={styles.iconSearchWrapper}>
            <Image style={styles.iconSearch} source={IMAGES.iconSearch} />
          </TouchableOpacity>
          <TextInput
            style={[styles.input, textInputStyles]}
            placeholder='Search..'
            autoFocus={autoFocus}
            autoCorrect={false}
            value={valueState}
            onChangeText={handleTextChange}
            onSubmitEditing={handleSubmitEditing}
          />
        </View>
        <TouchableOpacity style={styles.iconVoiceWrapper}>
          <Image style={styles.iconVoice} source={IMAGES.iconVoice} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(SearchBar, isEqual);
