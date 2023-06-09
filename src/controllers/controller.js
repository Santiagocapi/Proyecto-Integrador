const controller = {}
const connection = require ('../dbConnection/connection')
const model = require ('../models/musicevents')

controller.index = async (req, res) => {
    try{
        res.send('the connection has been correct from controller')
        await connection()
        const events = await model.find()
        console.log(events)
    }catch(err){
        console.error(err) 
    }
}

module.exports = controller 