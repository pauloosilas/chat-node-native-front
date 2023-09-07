const SERVER_IP = "192.168.1.6:8083";

export const ENV = {
  SERVER_IP: SERVER_IP,
  BASE_PATH: `http://${SERVER_IP}`,
  API_URL: `http://${SERVER_IP}/api`,
  SOCKET_URL: `http://${SERVER_IP}`,
  ENDPOINT: {
    AUTH: {
      REGISTER: "auth/register",
    },
  },
};
