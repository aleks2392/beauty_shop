export type User = {
  email: string;
  id: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  name?: string;
};

export type RegisterResponse = {
  accessToken: string;
  user: User;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  user: User;
};
