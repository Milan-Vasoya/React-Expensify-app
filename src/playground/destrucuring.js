

const person ={
    name:'milan',
    age : 20,
    location : {
        city: 'surat',
        temp: 80
    }
    };
    
    const {city, temp} =person.location;
    console.log(`${city} is ${temp}.`);