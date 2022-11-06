import React, {memo, useCallback} from 'react'

// LIBS
import isEqual from 'react-fast-compare'
import {s} from 'react-native-size-matters/extend'

// Types
import {IProductCardProps} from '@model-types'

// Themes
import {Icons, Metrics} from '@themes'

// Styles
import {Image} from '@components/Image/Image.styles'
import {
  IconHeartWrapperStyled,
  ImageWrapperStyled,
  ProductCardWrapperStyled,
} from './ProductCard.styles'
import PStyled from '@components/Paragraph/P.styles'
import ViewStyled from '@components/View/View.styles'

// Constant
import {PARAGRAPH_TYPE} from '@constants'

const ProductCard = ({
  product,
  onPressProductCard,
  onPressLikeProduct,
}: IProductCardProps) => {
  const {url, like, name, type, price} = product || {}

  // handle action press product card with id
  const handlePressCardProduct = useCallback(() => {
    onPressProductCard(product.id)
  }, [product.id, onPressProductCard])

  // handle action press like product
  const handlePressLikeProduct = useCallback(() => {
    onPressLikeProduct(product)
  }, [product, onPressLikeProduct])

  return (
    <ProductCardWrapperStyled>
      <ImageWrapperStyled onPress={handlePressCardProduct}>
        <Image.Normal
          alignSelf="center"
          height={s(200)}
          width={s(160)}
          source={{
            uri: url,
          }}
          resizeMode="cover"
        />
        <IconHeartWrapperStyled onPress={handlePressLikeProduct}>
          <Image.Normal
            height={s(20)}
            width={s(20)}
            source={like ? Icons.heartLiked : Icons.heart}
            resizeMode="contain"
          />
        </IconHeartWrapperStyled>
      </ImageWrapperStyled>

      <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_NAME_AND_TYPE}>
        {name}
      </PStyled.Base>
      <ViewStyled.Custom mBottom={Metrics.margin.tiny}>
        <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_NAME_AND_TYPE}>
          {type}
        </PStyled.Base>
      </ViewStyled.Custom>
      <PStyled.Base type={PARAGRAPH_TYPE.PRODUCT_PRICE}>
        {`$ ${price}`}
      </PStyled.Base>
    </ProductCardWrapperStyled>
  )
}

export default memo(ProductCard, isEqual)
