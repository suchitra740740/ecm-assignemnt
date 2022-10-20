export interface Context {
  requestId: string;
}

export interface Secrets {
  PORT: string;
  PG_HOST: string;
  PG_PORT: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
  JWT_SECRET: string;
  JWT_EXPIRATION: string;
  S3_ANNOUNCEMENT_BUCKET:string;
  SKYWALLET_BASE_URL: string;
  SKYWALLET_VERIFY_TOKEN_ENDPOINT: string
  AWS_ACCESS_KEY:string
  AWS_SECRET_KEY:string
}
