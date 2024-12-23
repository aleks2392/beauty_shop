type User = {
  email: string;
  id: string;
};

type RegisterRequest = {
  email: string;
  password: string;
  name?: string;
};

type RegisterResponse = {
  accessToken: string;
  user: User;
};

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
  user: User;
};
