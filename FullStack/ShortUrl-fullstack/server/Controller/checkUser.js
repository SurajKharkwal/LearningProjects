const { MongoClient } = require('mongodb');
 
async function checkUsers (url, data) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        const database = client.db('URL_Database');
        const collection = database.collection('Users')
        const input = {
            "email": data.email
        }
    
        const result = await collection.findOne(input);
        if( result != null )
            return result._id;
        else 
            return 0;
    } 
    catch (error) {
        console.log(error);
    }
    finally {
        client.close();
    }
}

module.exports = checkUsers;