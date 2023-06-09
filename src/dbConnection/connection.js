const mongoose = require ('mongoose');
//const config = {
    //autoIndex:true,
    //useNewUrlParser:true
//}

const uri = "mongodb+srv://Santiagocapi:wFt7Dx6ewjjml9i3@cluster0.q8rqjl9.mongodb.net/?retryWrites=true&w=majority"

module.exports = ()=> mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

//const connected = "mongodb+srv://Santiagocapi:wFt7Dx6ewjjml9i3@cluster0.q8rqjl9.mongodb.net/?retryWrites=true&w=majority"
//mongoose.connect(connected,config)
//.then(() => console.log('Conectado a mongo'))
//.catch(err => console.log('Error',err))