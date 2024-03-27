import mongoose from 'mongoose'

let conn = null

export class Database {
  static async connect() {
    const uri: string = process.env.MONGO_URI
    const production: boolean = process.env.production === 'true'

    if (!production) {
      mongoose.set('debug', { shell: true })
    }

    const connection = await mongoose.connect(uri, {
      bufferCommands: false // Disable mongoose buffering
    })
    console.log('Connected correctly to Mongo server')
    return connection
  }

  static async getConnection() {
    if (conn) {
      return conn
    }

    conn = await this.connect()
    return conn
  }
}
