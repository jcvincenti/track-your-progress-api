const mongoose = require('mongoose');
const srv = `mongodb+srv://${process.env.DB_ORG_NAME}:${process.env.DB_PASSWORD}@cluster0.k0by1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connect = () => {
    mongoose.connect(srv, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.error(err);
    })
};

exports.connect = connect