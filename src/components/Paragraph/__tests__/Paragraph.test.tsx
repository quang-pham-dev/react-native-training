import React from 'react'

// Libs
import {render} from '@testing-library/react-native'

// Styles
import ParagraphStyled from '../P.styles'

// Constants
import {PARAGRAPH_TYPE} from '@constants/type'

describe('Paragraph', () => {
  test('should render Paragraph normal with tiny text correctly', () => {
    const component = render(
      <ParagraphStyled.Base type={PARAGRAPH_TYPE.TINY}>
        Paragraph
      </ParagraphStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph normal with base text correctly', () => {
    const component = render(
      <ParagraphStyled.Base type={PARAGRAPH_TYPE.BASE}>
        Paragraph
      </ParagraphStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph normal with small text correctly', () => {
    const component = render(
      <ParagraphStyled.Base type={PARAGRAPH_TYPE.SMALL}>
        Paragraph
      </ParagraphStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph normal with medium text correctly', () => {
    const component = render(
      <ParagraphStyled.Base type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph normal with large text correctly', () => {
    const component = render(
      <ParagraphStyled.Base type={PARAGRAPH_TYPE.LARGER}>
        Paragraph
      </ParagraphStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph center correctly', () => {
    const component = render(
      <ParagraphStyled.Center type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.Center>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph Right correctly', () => {
    const component = render(
      <ParagraphStyled.Right type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.Right>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph font family base correctly', () => {
    const component = render(
      <ParagraphStyled.TFamilyRegular type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.TFamilyRegular>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph font family bold correctly', () => {
    const component = render(
      <ParagraphStyled.TFamilyBold type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.TFamilyBold>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph font family medium correctly', () => {
    const component = render(
      <ParagraphStyled.TFamilySemiBold type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.TFamilySemiBold>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
