const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/db_quehaypahacer'

const conn = async () => {
  await mongoose.connect(uri)
  console.log('Connection with mongo success')
}

conn().catch(error => console.error('Error connecting with mongon', error))
