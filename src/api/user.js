import { ENV } from "../utils";

export class User {
  async getMe(accessToken) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINT.ME}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(accessToken, userData) {
    try {
      const data = userData;

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
      const url = `${ENV.API_URL}/${ENV.ENDPOINT.ME}`;

      const params = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      };

      const reesponse = await fetch(url, params);
      const result = await response.json();

      if (reesponse.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
