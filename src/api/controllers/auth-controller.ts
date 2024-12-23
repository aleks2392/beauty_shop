import { Http } from "../../utils/modules/http";
const loginApi = new Http(" http://localhost:3000");

class AuthController {
  public async registration(body: RegisterRequest) {
    try {
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
    } catch (e) {
      throw e;
    }
  }

  async login(body: LoginRequest) {
    try {
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
    } catch (e) {
      throw e;
    }
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  get tokenKey() {
    return "accessToken";
  }
}

export const authController = new AuthController();
