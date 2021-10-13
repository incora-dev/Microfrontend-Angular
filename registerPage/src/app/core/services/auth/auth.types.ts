export interface RegisterUserData {
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  id: number;
  token: string;
}
