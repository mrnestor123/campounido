import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const main = async () => {
    const app = express();

    app.use(bodyParser.json());

    app.use(
        cors({
            origin: `http://localhost:${process.env.DEV_PORT || 3000}`,
            methods: [
                'GET',
                'POST',
                'PUT',
                'DELETE',
                'UPDATE',
                'OPTIONS',
                'PATCH',
            ],
        })
    );

    const client = new MongoClient(process.env.MONGO_URI);

    try {
        await client.connect();
        console.log('\nMongoDB connection \x1b[92msuccessful\x1b[0m');
    } catch (error) {
        console.error(error);
    }

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.get('/prueba', async (req, res) => {
        const db = client.db('campounido');
        const collection = db.collection('clients');
        const doc = await collection.find().toArray();
        res.send(doc[0]);
    });

    app.post('/prueba', async (req, res) => {
        const db = client.db('campounido');
        const collection = db.collection('clients');
        const doc = await collection.insertOne(req.body);
        console.log("envio")
        res.send(doc);
    });

    app.listen(process.env.DEV_PORT, () => {
        console.log(
            `\nServer is running on \x1b[93mhttp://localhost:${process.env.DEV_PORT}/ \x1b[0m`
        );
    });
};

main().catch((err) => console.error(err));
