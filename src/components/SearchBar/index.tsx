import React, {useCallback} from 'react'

// LIBS
import {s} from 'react-native-size-matters/extend'

// Contexts
import {useProductContext} from '@contexts'

// Styles
import IconStyled from '@components/Icon/Icon.styles'
import FlexStyled from '@components/Flex/Flex.styles'
import {
  IconWrapperStyled,
  InputFiledStyled,
  SearchBarWrapperStyled,
} from './SearchBar.styles'

// Themes
import {Icons} from '@themes'

// Store
import {SEARCH_PRODUCTS_VALUE} from '@store'

type SearchBarProps = {
  autoFocus?: boolean
  onSubmitEditing: () => void
  onChangeText?: (text: string) => void
}

const SearchBar = ({autoFocus, onSubmitEditing}: SearchBarProps) => {
  const [valueState, setValueState] = React.useState<string>('')
  const {dispatch} = useProductContext()

  const handleTextChange = useCallback(
    (text: string) => {
      setValueState(text)
      dispatch({
        type: SEARCH_PRODUCTS_VALUE,
        payload: {
          searchValue: text,
        },
      })
    },
    [dispatch],
  )

  const handleSubmitEditing = useCallback(() => {
    onSubmitEditing()
  }, [onSubmitEditing])

  return (
    <FlexStyled.Row>
      <SearchBarWrapperStyled>
        <>
          <IconWrapperStyled onPress={handleSubmitEditing}>
            <IconStyled width={s(20)} height={s(20)} source={Icons.search} />
          </IconWrapperStyled>
        </>
        <InputFiledStyled
          placeholder="Search.."
          autoFocus={autoFocus}
          autoCorrect={false}
          value={valueState}
          onChangeText={handleTextChange}
          onSubmitEditing={handleSubmitEditing}
        />
      </SearchBarWrapperStyled>
      <IconWrapperStyled>
        <IconStyled width={s(50)} height={s(50)} source={Icons.voice} />
      </IconWrapperStyled>
    </FlexStyled.Row>
  )
}

export default SearchBar
