

import { initializeApp, cert }  from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import configuration from './Your_Firebase_Credentials_file.js';

const serviceAccount = configuration;

const firebaseApp = initializeApp({
    credential: cert(serviceAccount)
})

let db = getFirestore(firebaseApp);

const usersCollection = db.collection('patient');

async function addPatient(obj) {
    try {
        await usersCollection.add({
            ...obj
        });
        console.log('New user added successfully');
    } catch (error) {
        console.error('Error adding user:', error);
    }
}

async function conformPatient(username, password) {
    try {
        const querySnapshot = await usersCollection.where('username', '==', username).get();

        if (querySnapshot.empty) {
            return false;
        }

        querySnapshot.forEach(doc => {
            const userData = doc.data();
            const storedPassword = userData.password;

            if (password === storedPassword) {
                return true;
            } else {
                return false;
            }
        });
    } catch (error) {
        console.error('Error signing in:', error);
    }
}

const usersCollection1 = db.collection('patient-records');

async function addPatientRecord(key, newData) {
    try {
        const docRef = usersCollection1.doc(key);
        
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
            const existingData = docSnapshot.data();
            const dataArray = existingData[key] || [];
            dataArray.push(newData);
            await docRef.update({
                [key]: dataArray
            });
            console.log('Object added to array associated with key:', key);
        } else {
            // If the document doesn't exist, create a new document
            await docRef.set({
                [key]: [newData]
            });
            console.log('New document created with key:', key);
        }
    } catch (error) {
        console.error('Error updating Firestore document:', error);
    }
}

async function getPatientRecord(key) {
    try {
        const docRef = usersCollection1.doc(key);
        
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
            const existingData = docSnapshot.data();
            const dataArray = existingData[key] || [];
            console.log(dataArray);
            console.log('got the array', key);
            return dataArray;
            
        } else {
            // If the document doesn't exist, create a new document
            return false;
            }
            
        }
     catch (error) {
        console.error('Error retriving Firestore document:', error);
    }
}

const usersCollection2 = db.collection('doctor');

async function addDoctor(obj) {
    try {
        await usersCollection2.add({
            ...obj
        });
        console.log('New user added successfully');
    } catch (error) {
        console.error('Error adding user:', error);
    }
}

async function conformDoctor(username, password) {
    try {
        const querySnapshot = await usersCollection2.where('username', '==', username).get();
        const querySnapshot1 = await usersCollection.where('doctorname', '==', username).get();

        if (querySnapshot.empty) {
            console.log('There is no such doctor username');
            return false;
        }

        let result = []; // Variable to store the result

        querySnapshot.forEach(doc => {
            const userData = doc.data();
            const storedPassword = userData.password;

            if (password === storedPassword) {
                if (querySnapshot1.empty) {
                    console.log("No patient usernames found with the particular doctor name");
                } else {
                    const usernames = [];
                    querySnapshot1.forEach(doc1 => {
                        const userData1 = doc1.data();
                        usernames.push(userData1.username);
                    });
                    console.log("These are the usernames:");
                    console.log(usernames);
                    result = usernames; // Assigning the result inside the loop
                }
            } else {
                console.log("Doctor password is wrong");
                result = false; // Assigning the result inside the loop
            }
        });

        return result; // Returning the result after the loop
    } catch (error) {
        console.error('Error signing in:', error);
    }
}


export { addPatient,conformPatient,addPatientRecord ,getPatientRecord,addDoctor,conformDoctor};
