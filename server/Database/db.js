import mongoose from 'mongoose';


const connection =  async(username , password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerceweb.xqdf9.mongodb.net/ecommerceweb?retryWrites=true&w=majority`;
    try {

   await mongoose.connect(URL , {useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
   console.log('Database connected succesfully');
    }
    catch (error) {
        console.log('Error:',error.message);
    }
}
export default connection;