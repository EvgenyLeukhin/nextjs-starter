// HARDCODE_USER_TOKEN
const HARDCODE_USER_TOKEN =
  'QgH55gCZytWCBM7qg6rXoEEvnP8cQF5pSw8ZTDGGMJTI0cewnpEXiBZlUwEuXpJA';

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
