const express = require('express');
const app = express();

const path = require('path');

/* express settings */
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); // procesar archivos .html
app.set('view engine', 'ejs'); // procesanr archivos .ejs

/* middlewares */

/* routes */
app.use(require('./routes/index'));

/* static files */ 
app.use(express.static(path.join(__dirname, 'public')));

/* listen the server */
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
});