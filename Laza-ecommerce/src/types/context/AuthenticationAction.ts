import { IUserResponse } from 'types/models/User';

export interface AuthAction {
  payload: IUserResponse;
  type: string;
  error?: string;
}
