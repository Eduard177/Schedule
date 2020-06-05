const mongoose = require('mongoose');
const { MONGO_URI, PORT } = require('./config');
const { Agenda } = require('./models');
const app = require('./server')
const { HomeRoute } = require('./routes')


mongoose.connect(MONGO_URI, { useNewUrlParser: true })
    .then(
        app.listen(PORT, () => { console.log(`Server on in port ${PORT}`) })
    ).catch(console.log)