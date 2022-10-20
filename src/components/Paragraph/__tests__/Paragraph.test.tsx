import React from 'react'
import {create} from 'react-test-renderer'

import ParagraphStyled from '../P.styles'

// Constants
import {PARAGRAPH_TYPE} from '@constants/type'

describe('Paragraph', () => {
  test('should render Paragraph normal with tiny text correctly', () => {
    const component = create(
      <ParagraphStyled.Base type={PARAGRAPH_TYPE.TINY}>
        Paragraph
      </ParagraphStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph normal with base text correctly', () => {
    const component = create(
      <ParagraphStyled.Base type={PARAGRAPH_TYPE.BASE}>
        Paragraph
      </ParagraphStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph normal with small text correctly', () => {
    const component = create(
      <ParagraphStyled.Base type={PARAGRAPH_TYPE.SMALL}>
        Paragraph
      </ParagraphStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph normal with medium text correctly', () => {
    const component = create(
      <ParagraphStyled.Base type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph normal with large text correctly', () => {
    const component = create(
      <ParagraphStyled.Base type={PARAGRAPH_TYPE.LARGER}>
        Paragraph
      </ParagraphStyled.Base>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph center correctly', () => {
    const component = create(
      <ParagraphStyled.Center type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.Center>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph Right correctly', () => {
    const component = create(
      <ParagraphStyled.Right type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.Right>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph font family base correctly', () => {
    const component = create(
      <ParagraphStyled.TFamilyRegular type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.TFamilyRegular>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph font family bold correctly', () => {
    const component = create(
      <ParagraphStyled.TFamilyBold type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.TFamilyBold>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render Paragraph font family medium correctly', () => {
    const component = create(
      <ParagraphStyled.TFamilySemiBold type={PARAGRAPH_TYPE.MEDIUM}>
        Paragraph
      </ParagraphStyled.TFamilySemiBold>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
