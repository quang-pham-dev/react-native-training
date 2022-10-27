export interface ProductSizeProps {
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

export interface IProduct {
  id: string
  brandId: string
  price: number
  title?: string
  name: string
  type: string
  url: string
  description?: string
  reviewers: ReviewerProps
  sizes: ProductSizeProps[]
  like?: boolean
  imagesPreview?: ImageReviewerProps[]
  rating?: string
  comment: string
}

export interface IProductCardProps {
  product: IProduct
  onPressProductCard: (id: string) => void
  onPressLikeProduct: (item: IProduct) => void
}
