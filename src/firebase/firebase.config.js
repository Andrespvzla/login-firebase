import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPncFEPZ7PJg3e5rhMsHUPKOzI1LRXwdQ',
  authDomain: 'loginproject-36365.firebaseapp.com',
  projectId: 'loginproject-36365',
  storageBucket: 'loginproject-36365.appspot.com',
  messagingSenderId: '830635066556',
  appId: '1:830635066556:web:d389f389f1148013a83cb9',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
