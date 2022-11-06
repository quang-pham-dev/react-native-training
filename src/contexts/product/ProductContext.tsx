import React, {createContext, Dispatch, useContext, useReducer} from 'react'

// Context Reducer
import productsReducer, {InitialProductsState} from './reducer/product'

// Types
import {ProductsState} from '@state-types'

type ProductsContext = {
  state: ProductsState
  dispatch: Dispatch<any>
}

export const ProductsContext = createContext<ProductsContext>({
  state: InitialProductsState,
  dispatch: () => null,
})

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [state, dispatch] = useReducer<any>(
    productsReducer,
    InitialProductsState,
  )

  return (
    <ProductsContext.Provider value={{state, dispatch} as any}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductsContext)
