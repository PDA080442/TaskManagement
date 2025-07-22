import type { RegData } from "@/types/auth.type";
import { useApi } from "./useApi";

const { call } = useApi('/profile')

export async function regdata(formdata: RegData): Promise<void> {
  await call('/signup/', formdata, 'POST')
}