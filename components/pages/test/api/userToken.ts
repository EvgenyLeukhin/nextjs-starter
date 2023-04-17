// import { testStore } from '../store-redux-classic';
// import { TUserData } from '../store-redux-classic/app/app.types';

export const USERDATA_STORAGE_FIELD = 'pickup-points-userdata';
export const TOKEN_PREFIX = 'Bearer';

// const returnLsUserToken = () => {
//   if (typeof window !== 'undefined') {
//     const userData: TUserData = JSON.parse(
//       localStorage.getItem(USERDATA_STORAGE_FIELD) as string,
//     );

//     return `${TOKEN_PREFIX} ${userData?.token}`;
//   }
// };

// const returnStoreUserToken = () => {
//   const userData: TUserData = testStore.getState().app.userData;

//   return `${TOKEN_PREFIX} ${userData.token}`;
// };

// export const USER_TOKEN_LS = returnLsUserToken();
// export const USER_TOKEN_STORE = returnStoreUserToken();
// // export const USER_TOKEN_COOKIES; // TODO
