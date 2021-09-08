const courseRoute = require('./course');
const courseLitmitRoute = require('./site')
const loginRoute = require('./login')

function route(app) {
    app.use('/courses', courseRoute);
    app.use('/login', loginRoute)
    app.use('/', courseLitmitRoute)
}

module.exports = route;
