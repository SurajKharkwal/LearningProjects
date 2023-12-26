const  { MongoClient } = require('mongodb');

async function createUser (url, data) {
    const client = new MongoClient(url);
    let uid ;

    try {
        await client.connect();
        const database = client.db('URL_Database');
        const collection = database.collection('Users')
        const p = await collection.createIndex({ email: 1 }, { unique: true });
        const input = {
            "userName": data.userName,
            "email": data.email,
            "password": data.password,
            "date": new Date()
        }
    
        const result = await collection.insertOne(input);
        uid = result.insertedId;
        console.log(result, p);
    } 
    catch (error) {
        console.log(error);
    }
    finally {
        client.close();
        return uid;
    }

}

module.exports = createUser;