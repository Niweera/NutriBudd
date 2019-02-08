import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
import notifyReducer from './reducers/notifyReducer';
// import settingsReducer from './reducers/settingsReducer';

const firebaseConfig = {
  apiKey: "AIzaSyA1SGhU7-cunQ7VIrCmAVWSYHfe9-FLb6w",
  authDomain: "foodanalyser.firebaseapp.com",
  databaseURL: "https://foodanalyser.firebaseio.com",
  projectId: "foodanalyser",
  storageBucket: "foodanalyser.appspot.com",
  messagingSenderId: "67786128135"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
const settings = { };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer
//   settings: settingsReducer
});

// Check for settings in localStorage
// if (localStorage.getItem('settings') == null) {
//   // Default settings
//   const defaultSettings = {
//     disableBalanceOnAdd: true,
//     disableBalanceOnEdit: false,
//     allowRegistration: false
//   };

  // Set to localStorage
//   localStorage.setItem('settings', JSON.stringify(defaultSettings));
// }

// Create initial state
// const initialState = { settings: JSON.parse(localStorage.getItem('settings')) };
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
);

export default store;
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ instead of window.__REDUX_DEVTOOLS_EXTENSION__
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()