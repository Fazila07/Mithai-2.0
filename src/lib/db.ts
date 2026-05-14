import mongoose from 'mongoose'

const getMongoUri = () => {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable in .env.local')
  }
  return uri
}

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

// Use a global variable to preserve the value across hot reloads in development
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache
}

const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null }

if (!global.mongoose) {
  global.mongoose = cached
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const uri = getMongoUri()
    cached.promise = mongoose.connect(uri, {
      bufferCommands: false,
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}