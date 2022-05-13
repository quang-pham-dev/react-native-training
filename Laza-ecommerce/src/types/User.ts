export interface User {
  id: string;
  avatar: string;
  username?: string;
  password: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  role: string;
}

export interface UserResponse {
  data: {
    access_token: string;
    user: User;
  };
}

export interface UserSignIn {
  username: string;
  password: string;
}
