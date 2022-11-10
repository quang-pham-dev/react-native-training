import React, {createContext, Dispatch, useContext, useReducer} from 'react'

// Store
import {InitialBrandState, brandReducer} from '@store'

// Types
import {BrandState} from '@state-types/brand'

type BrandContext = {
  state: BrandState
  dispatch: Dispatch<any>
}

export const BrandContext = createContext<BrandContext>({
  state: InitialBrandState,
  dispatch: () => null,
})

export const BrandsContextProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [state, dispatch] = useReducer<any>(brandReducer, InitialBrandState)

  return (
    <BrandContext.Provider value={{state, dispatch} as any}>
      {children}
    </BrandContext.Provider>
  )
}

export const useBrandContext = () => useContext(BrandContext)
