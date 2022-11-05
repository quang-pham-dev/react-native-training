import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native'

export interface ProductSize {
  id: string
  size: string
}

export interface ReviewerProps {
  id: string
  name: string
  date: string
  image: string
}

export interface ImageReviewerProps {
  id: string
  image: string
}

// TODO: using Pick for use case override
export interface IProduct {
  id: string
  brandId: string
  price: number
  vatPrice: number
  name?: string
  brandName: string
  type: string
  url: string
  description?: string
  reviewers: ReviewerProps
  sizes: ProductSize[]
  like?: boolean
  imagesPreview?: ImageReviewerProps[]
  rating: string
  comment: string
}

export interface IProductCardProps {
  product: IProduct
  onPressProductCard: (id: string) => void
  onPressLikeProduct: (item: IProduct) => void
}

export interface ProductListProps {
  products: IProduct[]
  onPressLikeProduct: (item: IProduct[]) => void
  onPressProductCard: (id: string) => void
  onLoadMoreProduct: () => void
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
}
