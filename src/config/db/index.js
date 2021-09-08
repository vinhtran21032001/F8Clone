const mongoose = require('mongoose');

async function connect() {
    const urlDB = "mongodb+srv://vinhtran:vinh123456@cluster0.6brce.mongodb.net/my_courses?retryWrites=true&w=majority";
    await mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    });
    console.log('connect success')
}

module.exports = {connect};
 