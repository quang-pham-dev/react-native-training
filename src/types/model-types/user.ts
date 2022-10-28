export interface IUser {
  id: string
  avatar: string
  username: string
  password: string
  gender: string
  email: string
  phone: string
  address: string
  role: string
}

export interface UserResponse {
  access_token: string
  user: IUser
}

export interface LoginCredentials {
  username: string
  password: string
}
