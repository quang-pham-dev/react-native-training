import React, {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useReducer,
} from 'react'

// Context Reducer
import authenticationReducer, {InitialAuthState} from './reducers/auth'

// Types
import {AuthState} from '@state-types'

export const AuthContext = createContext<{
  state: AuthState
  dispatch: Dispatch<any>
}>({
  state: InitialAuthState,
  dispatch: () => null,
})

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [state, dispatch] = useReducer<any>(
    authenticationReducer,
    InitialAuthState,
  )

  const value = useMemo(() => ({state, dispatch}), [state])

  console.log('value', value)

  return (
    <AuthContext.Provider value={value as any}>{children}</AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
