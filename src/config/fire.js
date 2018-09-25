import firebase from 'firebase';

const config = {

    apiKey: "AIzaSyDGRQhDQCWrkaqr3LPTkx5gpj9YEST8Qoc",
    authDomain: "welcom-react.firebaseapp.com",
    databaseURL: "https://welcom-react.firebaseio.com",
    projectId: "welcom-react",
    storageBucket: "welcom-react.appspot.com",
    messagingSenderId: "953306433463"
};
const fire = firebase.initializeApp (config);

export default fire;