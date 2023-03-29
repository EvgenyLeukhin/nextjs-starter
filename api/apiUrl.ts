export enum EnvList {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

const { DEVELOPMENT, PRODUCTION } = EnvList;

export const API_URL = process.env.NEXT_PUBLIC_URL;

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

// product-hired api (for test)
// companies: https://stage1.producthired.com/api/api/companies
// skills: https://stage1.producthired.com/api/api/skills
// plans: https://stage1.producthired.com/api/api/plans
// locations: https://stage1.producthired.com/api/api/locations

// old admin: https://admin.producthired.com/
// mail: eugenel@effective.band
// pw:   eugenel@effective.band

// new admin
// mail: eugenel@effective.band
// pw:   eugenel@effective.band

// without admin rights
// mail: eugeny.leukhin@stellarsolvers.com
// pw:   123123
