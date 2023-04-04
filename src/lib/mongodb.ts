import { MongoClient } from 'mongodb'
const uri:string = process.env.MONGODB_URI?process.env.MONGODB_URI:"";
const options = {}

let client:any
let clientPromise:any

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}


client = new MongoClient(uri, options)
clientPromise = client.connect()

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;