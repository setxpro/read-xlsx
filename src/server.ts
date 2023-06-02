import "dotenv/config"
import cors from 'cors'
import http from 'http'
import express from 'express'

const app = express()

// enable the JSON encoding
app.use(express.json())

// enable the cors middleware
app.use(cors({
    origin: '*'
}))

// console.log(allStores)

// console.log(preferredSellers)

// console.log(storePhoneNumbers)

export const server = http.createServer(app);
