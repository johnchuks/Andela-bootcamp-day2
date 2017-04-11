
var https = require('https');

var location = 'lagos';

var apiKey = '7e8c103c40e74b8dab0164810170903';

 https.get("https://api.apixu.com/v1/current.json?key="+apiKey+"&q="+location, function(data){

       var ipData ="";

         data.on('data', function(item){

    	      ipData += item;
         });
	
	     data.on('end', function(){

		    if (data.statusCode === 200) {

			   try {

			   	var weatherItems = JSON.parse(ipData);

			   	console.log("The weather in "+weatherItems.location.name+ " is "+weatherItems.current.temp_c+ " degreesC");


			   }catch (error) {

			   	console.log("An error has occured");


			   } 


			   }

			   else {

			   	console.log("Sorry an error has occurred");
			   }
	    });
});







