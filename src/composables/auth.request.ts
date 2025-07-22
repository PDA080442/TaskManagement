import type { RegData, LogData, AuthTokens } from "@/types/auth.type";
import { useApi } from "./useApi";
import axios from "axios";

const { call } = useApi('/profile')

export async function regdata(formdata: RegData): Promise<void> {
  await call('/signup/', formdata, 'POST')
}

export async function logdata(logindata: LogData): Promise<AuthTokens> {
  const tokens = await call('/signin/', logindata, 'POST') as AuthTokens
  localStorage.setItem('accessToken', tokens.access)
  localStorage.setItem('refreshToken', tokens.refresh)

  axios.defaults.headers.common['Authorization'] = `Bearer ${tokens.access}`

  return tokens as AuthTokens
}