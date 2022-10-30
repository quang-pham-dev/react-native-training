import {IUser} from '@model-types'
import {UserResponse} from '@apis'

export interface AuthState {
  isLoading: boolean
  isAuthenticated: boolean
  error: string | null
  currentUser: IUser | undefined
}

export interface AuthAction {
  payload: UserResponse
  type?: string
  error?: string
}
