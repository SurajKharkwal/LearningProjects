const { MongoClient } = require('mongodb');

async function createUrl (url, data) {
    const client = new MongoClient(url)
    try {
        await client.connect();
        const database = client.db('UrlDatabase');
        const collection = database.collection('Urlls');
        await collection.createIndex({ ShortID: 1}, { unique: true})

        const input = {
            "FullUrl": data.full,
            "ShortID": data.short,
            "uid": data.uid
        }

        await collection.insertOne(input);
        console.log("Data Inserted");
    } catch (error) {
        console.log(error);
    }
    finally {
        client.close();
    }
}
module.exports = createUrl;