const express= require('express');
const app=express();

//Settings
app.set('port', process.env.PORT ||3000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/users'))

//starting the server
app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'))
});