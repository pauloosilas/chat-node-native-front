import { ENV } from "../utils";

export class Chat {
  async create(token, participantIdOne, participantIdTwo) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINT.CHAT}`;
      const params = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          participant_id_one: participantIdOne,
          participant_id_two: participantIdTwo,
        }),
      };
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200 && response.status !== 201) {
        throw result;
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
}
