const app = require('./config/server');


// starting the server
app.listen(app.get('port'), () => {
     console.log('server on port', app.get('port'));
})

