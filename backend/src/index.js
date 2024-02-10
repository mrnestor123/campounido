import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const main = async () => {

  const app = express();
  
  app.use(bodyParser.json())

  app.use(cors({
    origin: `http://localhost:${process.env.DEV_PORT || 3000}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'OPTIONS', 'PATCH'],
  }))

  const client = new MongoClient(process.env.MONGO_URI)

  try {
    await client.connect()
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(error)
  } finally {
    await client.close()
  }

  app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.listen(process.env.DEV_PORT, () => {
    console.log(`Server is running on port ${process.env.DEV_PORT}`)
  })

}

main().catch( (err) => console.error(err) )
