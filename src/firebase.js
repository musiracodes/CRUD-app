import { initializeApp, database } from 'firebase';

const app = initializeApp({
    apiKey: "apiKey",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId"
});

export const db = app.database();
export const namesRef = db.ref('names');