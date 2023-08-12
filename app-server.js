const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')


/* Middleware */
app.use(express.json()) //req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))

app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png')))

/* Controller Goes Here Remove the test
app.get('/test', (req, res)=>{
	res.status(200).json({
		website: 'My Website',
		info: 'Not that much'
	})
})
Controller Ends here */
//LISTENER

// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));
// for react router
app.get('/*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

module.exports = app