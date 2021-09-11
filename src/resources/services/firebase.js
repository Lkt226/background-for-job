import {initializeApp} from "firebase/app";

import { getAuth,GoogleAuthProvider, signInWithRedirect, signOut, getRedirectResult} from 'firebase/auth';

import { getDatabase, ref } from 'firebase/database';

export const getUser = []

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  
  initializeApp(firebaseConfig);
  
  /// Auths
  export const auth = getAuth()

  // With email


  // With google
  export const authWithGoogle = {
    login: ()=>{
      signInWithRedirect(auth, new GoogleAuthProvider());
    },

    reconnect: ()=>{
      getRedirectResult(auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user;
        
        console.log([credential, token, user, result])
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      
        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        
        console.log([errorCode, errorMessage, email, credential, error])
        authWithGoogle.login()
      });
    },

    logout: ()=>{
      signOut(auth).then();
    },

  }

  /// Database
  export const database = (user ,path) => getRef(user, path)
  
  function getRef(user, path){
    path = path || ""
    return ref(getDatabase(), `users/${user || getUser[getUser.length-1]}/${path}`)
  }

  
