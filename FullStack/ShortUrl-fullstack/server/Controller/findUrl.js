const { MongoClient } = require('mongodb');
const { restart } = require('nodemon');

async function findUrls (url, id) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        const database = client.db('URL_Database');
        const collection = database.collection('Users')

        const result = await collection.find({ id }).toArray();

        if (result)
            client.close();
            return result;
    } catch (error) {
        console.log("Error:" ,error);
    }
}

module.exports = findUrls;