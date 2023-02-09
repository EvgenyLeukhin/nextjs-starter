export enum EnvList {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

const { DEVELOPMENT, PRODUCTION } = EnvList;

export const API_URL = `https://${process.env.NEXT_PUBLIC_URL}`;

export const returnEnv = (): EnvList => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return DEVELOPMENT;
    case 'production':
      return PRODUCTION;
    default:
      return DEVELOPMENT;
  }
};

export const isDev = returnEnv() === DEVELOPMENT;
export const isProd = returnEnv() === PRODUCTION;
