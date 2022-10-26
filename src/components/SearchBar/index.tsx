import React, {useCallback} from 'react'

// LIBS
import {s} from 'react-native-size-matters/extend'

// Styles
import IconStyled from '@components/Icon/Icon.styles'
import {Icons} from '@themes'
import {
  IconWrapperStyled,
  InputFiledStyled,
  SearchBarWrapperStyled,
} from './SearchBar.styles'
import FlexStyled from '@components/Flex/Flex.styles'

type SearchBarProps = {
  value?: string
  autoFocus?: boolean
  onSubmitEditing: () => void
  onChangeText?: (text: string) => void
}

const SearchBar = ({autoFocus, onSubmitEditing}: SearchBarProps) => {
  const [valueState, setValueState] = React.useState<string>('')

  const handleTextChange = useCallback((text: string) => {
    setValueState(text)
  }, [])

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
