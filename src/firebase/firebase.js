import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {firebase, database as default}


/*
// database.ref('expenses').once('value').then((snapshot)=>{
//     const expenses= [];

//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })

//         console.log(expenses);
// });

// let expenses= [];

// database.ref('expenses').on('child_changed', (snapshot)=>{
//    console.log(snapshot.key,snapshot.val());
// });


// setTimeout(()=>{
//     const abc= ""+`expenses/${expenses[0].id}/name`;
//     database.ref(abc).set('milan na expenses');

// },3000);


database.ref('expenses').push({
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment().valueOf()
});

database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment().subtract(4, 'days').valueOf()
});

database.ref('expenses').push({
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment().add(4, 'days').valueOf()
});






// const retriveData=database.ref().on('value',(snapshot)=>{
//     const val=snapshot.val();
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);    
// });

// setTimeout(() => {
//     database.ref().update({
//         name:'Milan Vasoya',
//         'job/title': 'CEO',
//         'job/company':'Google'
//     });
// }, 3000);

// database.ref()
//     .on('value',(snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     setTimeout(()=>{
//         database.ref('age').set(28);
//     },5000);




// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('data fetching failed', e);
//     });


// database.ref().set({
//     name: "milan",
//     age: 22,
//     stressLevel:6,
//     job: {
//         title:'software Engineer',
//         company:'google'
//     },
//     location: {
//         city: 'surat',
//         country: 'India'
//     }
// });

// database.ref().update({
//     stressLevel:9,
//     'job/company':'Amazone',
//     'location/city':'Ahmebd'
// });
// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log('isSingle removed');
// //     }).catch((e) => {
// //         console.log('removing Ooperation', e);
// //     });

*/