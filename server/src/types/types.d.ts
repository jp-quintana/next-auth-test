export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  name: string;
  lastName: string;
  confirmPassword: string;
}
