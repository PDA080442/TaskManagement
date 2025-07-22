export interface RegData {
  first_name: string,
  last_name: string,
  email: string,
  password: string
}

export interface LogData {
  email: string,
  password: string
}

export interface AuthTokens {
  access: string,
  refresh: string
}