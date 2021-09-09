const courseRoute = require('./course');
const courseLitmitRoute = require('./site')
const loginRoute = require('./login')
const AuthRoute = require('./auth')

function route(app) {
    app.use('/courses', courseRoute);
    app.use('/login', loginRoute)
    app.use('/', courseLitmitRoute)
    app.use('/auth',AuthRoute)
    
}

module.exports = route;
