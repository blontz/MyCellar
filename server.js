// set up ======================================================================
var express = require('express');
var app = express();


// configuration ===============================================================
app.set('view engine', 'ejs'); // set the view engine to EJS
app.use(express.static('js')); // serve static files


// routes ======================================================================

	// index page
	// The '/:var(index)?' means this function will handle calls to '/' and '/index'
	app.get('/:var(index)?', function(req, res){
		res.render('pages/index', {title: 'Home'});
	});

	// about page
	app.get('/about', function(req, res){
		res.render('pages/about', {title: 'About'});
	});

	// cellar page
	app.get('/cellar', function(req, res){
		res.render('pages/cellar', {title: 'My Cellar'});
	});

	// varietals page
	app.get('/varietals', function(req, res){
		res.render('pages/varietals', {title: 'Varietals'});
	});

	// wines page
	app.get('/wines', function(req, res){
		res.render('pages/wines', {title: 'Wines'});
	});


// data ========================================================================
app.get('/getWines', function(req, res){
	res.setHeader('Content-Type', 'application/json');
	var wines = [
        { "name": "First Taste", "varietal": "Merlot", "price": 24.99, "onHand": 0, "year": 2012}
    ];
	res.send(wines);
});

app.get('/getWineColors', function(req, res){
	//res.setHeader('Content-Type', 'application/json');
	var wineColors = ["Red", "White", "Rose", "Gray", "Orange", "Tawny", "Yellow"];
	res.send(wineColors);
});

app.get('/getVarietalList', function(req, res){
	//res.setHeader('Content-Type', 'application/json');
	var varietalList = ["Unknown", "Merlot", "Cab", "Pinot Nior", "Savanoc Blanc"];
	res.send(varietalList);
});



// listen (start app with node server.js) ======================================
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.listen(port, ip);
console.log('Running on  ' + ip + ':' + port);