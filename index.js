const express = require('express');
const app = express();
const port = process.env.PORT;
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const facebookStrategy = require('passport-facebook');

const FACEBOOK_APP_ID = '333877367228716',
	FACEBOOK_APP_SECRET = 'c603984f918b6402f92e075ea9065149';

// const facebookStrategyOPT = {
// 	cliendID : '333877367228716',
// 	clientSecret : 'c603984f918b6402f92e075ea9065149',
// 	callbackURL : 'https://localhost:3000/auth/facebook/callback'
// };

// const fbCallback = function(accessToken, refreshToken, profile, cb) {
// 	console.log(accessToken, refreshToken, profile);
// };

passport.use(new facebookStrategy({
		clientID: FACEBOOK_APP_ID,
		clientSecret: FACEBOOK_APP_SECRET,
		callbackURL: "https://sso1234.herokuapp.com/auth/facebook/callback"
	},
	function(accessToken, refreshToken, profile, cb) {
		console.log(profile);
		return ;
	}
));

app.post('/', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
	passport.authenticate('facebook', { successRedirect: '/home',
										failureRedirect: '/index' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.get('/', function(req, res) {
	res.render(path.join(__dirname, 'www/index'));
});

// app.get('/logout', function(req, res) {
// 	res.render(path.join(__dirname, 'www/index'));
// });

app.post('/home', function(req, res) {
	res.render(path.join(__dirname, 'www/home'));
});

// app.post('/', function(req, res) {
// 	console.log(req.body);
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));