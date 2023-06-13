import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {

    apiKey: "AIzaSyBuuwOpJDelXm5A1WQ7VFkp7QWQACXJgLc",
    authDomain: "chatonme-ff3a7.firebaseapp.com",
    projectId: "chatonme-ff3a7",
    storageBucket: "chatonme-ff3a7.appspot.com",
    messagingSenderId: "35464922881",
    appId: "1:35464922881:web:108da4cc762e889aeafd00",
    measurementId: "G-EKXD3KX36C"

};

firebase.initializeApp(firebaseConfig);

firebase.database().ref('.info/connected').on('value', (snapshot: { val: () => any; }) => {
  const isConnected = snapshot.val();
  console.log('Connessione a Firebase:', isConnected ? 'Stabilita' : 'Interrotta');
});
