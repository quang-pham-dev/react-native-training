import React, {createContext, Dispatch, useContext, useReducer} from 'react'

// Store
import {authenticationReducer, InitialAuthState} from '@store'

// Types
import {AuthState} from '@state-types/auth'

type AuthContext = {
  state: AuthState
  dispatch: Dispatch<any>
}

export const AuthContext = createContext<AuthContext>({
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

  return (
    <AuthContext.Provider value={{state, dispatch} as AuthContext}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
