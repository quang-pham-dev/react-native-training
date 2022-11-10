import React, {createContext, Dispatch, useContext, useReducer} from 'react'

// Store
import {InitialProductState, productsReducer} from '@store'

// Types
import {ProductsState} from '@state-types'

type ProductsContext = {
  state: ProductsState
  dispatch: Dispatch<any>
}

export const ProductsContext = createContext<ProductsContext>({
  state: InitialProductState,
  dispatch: () => null,
})

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [state, dispatch] = useReducer<any>(
    productsReducer,
    InitialProductState,
  )

  return (
    <ProductsContext.Provider value={{state, dispatch} as any}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductsContext)
