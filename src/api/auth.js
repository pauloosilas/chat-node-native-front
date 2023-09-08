import { ENV } from "../utils";

export class Auth {
  async register(email, password) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINT.AUTH.REGISTER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 201) throw result;
    } catch (error) {}
  }

  async login(email, password) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINT.AUTH.LOGIN}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
