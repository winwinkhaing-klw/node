const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';
const dboper = require('./operations');

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Connected to the server');
    const db = client.db(dbname);
    const collection = db.collection("dishes");
    dboper.insertDocument(db, { name: 'Vdonut', description: 'test' }, 'dishes', (result) => {
        console.log('Insert Document:\n ', result.ops);

        dboper.findDocuments(db, 'dishes', (docs) => {
            console.log('Found documents:\n', docs);

            dboper.updateDocument(db, { name: 'test' }, { description: 'testing' }, 'dishes', (result) => {
                console.log('Update Documents:\n', result.result);

                dboper.findDocuments(db, 'dishes', (docs) => {
                    console.log('Found documents:\n', docs);

                    db.dropCollection("dishes", (result) => {
                        console.log("Dropped Collection: ", result);
                        client.close();
                    });
                });
            });
        });
    });
})
