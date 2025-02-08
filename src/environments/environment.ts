// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ApiUrl: 'http://localhost:3000/api/v1/',
  firebase:{
    apiKey: "AIzaSyCYQsMe6DNRnXjEbFZ8cy10K7Bz66Qezl8",
    authDomain: "auth-login-ionic.firebaseapp.com",
    projectId: "auth-login-ionic",
    storageBucket: "auth-login-ionic.firebasestorage.app",
    messagingSenderId: "696162394993",
    appId: "1:696162394993:web:e5186bde4753e026b2ccd0"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
