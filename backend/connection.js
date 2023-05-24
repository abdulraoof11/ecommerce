require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectionStr = "mongodb+srv://raoof4581:raoof4581@cluster0.zzunqng.mongodb.net/ecomern?retryWrites=true&w=majority";

mongoose.connect(connectionStr, { useNewUrlparser: true })
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
