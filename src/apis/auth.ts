// import {ApiErrorResponse, ApiOkResponse, ApiResponse} from 'apisauce'

// API
import {http} from '@configs'

// utils
import {remove} from '@services'

// Constants
import {AUTH_DATA, ENDPOINTS} from '@constants'

// Types
import {IUser} from '@model-types'

export interface UserResponse {
  access_token: string
  user: IUser
}

interface AuthResponse {
  data: UserResponse
}

// sign in with username and password
export const signIn = (
  username: string,
  password: string,
): Promise<AuthResponse> => {
  return http.post(ENDPOINTS.AUTH.LOGIN, {username, password})
}

// Sign Out
const signOut = (): Promise<void> => {
  return remove(AUTH_DATA)
}

export const authService = {
  signIn,
  signOut,
}
