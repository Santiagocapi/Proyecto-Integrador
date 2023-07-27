const mongoose = require("mongoose");

const db_uri = 'mongodb+srv://Santiagocapi:WMAhpv2sKIeWoe0F@cluster0.q8rqjl9.mongodb.net/?retryWrites=true&w=majority';


module.exports = () => {

    const connect = ()  => {
        mongoose.connect(
            db_uri,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err)  => {
                if(err) {
                    console.log('DB ERROR');
                }else{
                    console.log(' DB CONNECTION OK')
                }
            }
        )
    }

    connect();
}