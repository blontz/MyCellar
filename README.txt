I kept everything pretty much the same except for the following additions:

1. Added a node server (server.js) using EJS as the view engine.  I'm using it for the partials rendering.  Also added API calls and routing.
2. Since I'm using EJS, the pages have a .ejs extension instead of .html.  
3. Created a dataService.js file.  This is where all the actual ajax calls are made. They call into the node server.

Example: 

	[varietal.js]
	dataservice.getVarietalList()
	    .done(function(data) { return data; })
	    .fail(function(error){ console.log(error); });

	[dataService.js]
	getVarietalList : function() {
		return $.get('/getVarietalList');
	}

4. For simplicity, I removed the call to footer.js and added the script to footer.ejs.  It saves a roundtrip and is already included in every page.

You'll notice each page in the pages directory has the includes in them.  You could take it further and have an actual 'shell' page that includes each site page, which in turn includes their specific scripts or other includes.


RUN
In terminal, navigate to the dir and run: npm install.  This will install the node dependencies outlined in package.json.

Next, to start the server, type node server.js

However, each time you make a change to server.js, you have restart the server again and this can get tedious.  
I recommend using nodemon. In terminal, run this:  npm install -g nodemon. Now when starting the server use: nodemon server.js.  Each time you make a change to server.js, the server will restart itself.