// HARDCODE_USER_TOKEN
const HARDCODE_USER_TOKEN =
  'PkBodYZXJEVICDoUZ54fxybYMvux7SqgTC7V6a5oya58X8vFo7Ne0zDuVxvO3naa';

function returnUserToken() {
  // to fix 'localStorage is not define' error
  if (typeof window !== 'undefined') {
    // get token from localStorage
    const userData = localStorage.getItem('login-user-data');

    if (userData) {
      return JSON.parse(userData).id; // convert localStorage string to object
    }
  }

  return null;
}

const LOGIN_USER_TOKEN = returnUserToken() || HARDCODE_USER_TOKEN;

export default LOGIN_USER_TOKEN;
