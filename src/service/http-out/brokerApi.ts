import {Campaign} from "../../screen/Campaign/domain/campaign";
import axios, {AxiosResponse} from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://urlabc:8000',
});

const accessToken = "abc";

interface AuthCredentials {
  accessToken: string;
  user: {
    id: number;
    email: string;
  };
}

function createCampaign(campaign: Campaign): Promise<AxiosResponse<number>> {
  return api.post<number>("/createCampaign", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

function login(
    email: string,
    password: string
): Promise<AxiosResponse<AuthCredentials>> {
  const data = {
    email,
    password,
  };
  return api.post<AuthCredentials>("/login", data);
}

export const brokerApi = {
  createCampaign,
  login,
};

