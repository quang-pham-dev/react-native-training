export interface IBrand {
  id: string
  name?: string
  url?: string
}

export interface BrandCardProps {
  brand: IBrand
  onPressBrandCard: (id: string) => void
}
