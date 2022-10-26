import React, {PropsWithChildren, useCallback, useState} from 'react'

// Styles
import {
  TruncatedTextBoldStyled,
  TruncatedTextStyled,
} from './LessMoreText.styles'

type LessMoreTextProps = {
  numberOfLines: number
}

const LessMoreText = ({
  children,
  numberOfLines,
}: PropsWithChildren<LessMoreTextProps>) => {
  const [isTruncatedText, setIsTruncatedText] = useState(false)
  const [showMore, setShowMore] = useState(true)

  // handle action press show more text
  const handleShowMore = useCallback(() => {
    setShowMore(!showMore)
  }, [showMore])

  return isTruncatedText ? (
    <>
      <TruncatedTextStyled numberOfLines={showMore ? numberOfLines : 0}>
        {children}
      </TruncatedTextStyled>
      <TruncatedTextBoldStyled onPress={handleShowMore}>
        {showMore ? 'Read More..' : 'Less'}
      </TruncatedTextBoldStyled>
    </>
  ) : (
    <TruncatedTextStyled
      onTextLayout={(event: any) => {
        const {lines} = event.nativeEvent
        setIsTruncatedText(lines?.length > numberOfLines)
      }}>
      {children}
    </TruncatedTextStyled>
  )
}

export default LessMoreText
