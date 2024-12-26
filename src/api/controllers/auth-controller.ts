import { Http } from "../../utils/modules/http";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../types/login";
const loginApi = new Http(" http://localhost:3000");

class AuthController {
  public async registration(body: RegisterRequest) {
    if (!(body.email && body.password)) {
      throw new Error("Email and password is required");
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const data = await loginApi.post<RegisterResponse>("/register", {
      headers: myHeaders,
      body: JSON.stringify(body),
    });

    localStorage.setItem(this.tokenKey, data.accessToken);

    return data.user;
  }

  async login(body: LoginRequest) {
    if (!(body.email && body.password)) {
      throw new Error("Email and password is required");
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const data = await loginApi.post<LoginResponse>("/login", {
      headers: myHeaders,
      body: JSON.stringify(body),
    });

    localStorage.setItem(this.tokenKey, data.accessToken);

    return data.user;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  get tokenKey() {
    return "accessToken";
  }
}

export const authController = new AuthController();
