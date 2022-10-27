export interface IBrand {
  id: string
  name?: string
  url?: string
}

export interface BrandCardProps {
  brand: IBrand
  onPressBrandCard: (id: string) => void
}

export interface BrandCardListProps extends IBrand {}

export interface BrandsListProps {
  brands: BrandCardListProps[]
  onPressBrandCard: (id: string) => void
  onLoadMoreBrands?: () => void
}
