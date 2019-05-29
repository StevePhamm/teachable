// AJAX JSON EXAMPLE

/*
Here's a review of what each piece is doing. 
The JavaScript XMLHttpRequest object has a number of properties 
and methods that are used to transfer data. First, an instance of the 
XMLHttpRequest object is created and saved in the req variable.

Next, the open method initializes a request - this example is requesting data from an API, 
therefore is a "GET" request. The second argument for open is the URL of the API you are 
requesting data from. The third argument is a Boolean value where true makes it an asynchronous request.

The send method sends the request. Finally, the onload event handler parses the returned data and applies the 
JSON.stringify method to convert the JavaScript object into a string. This string is then inserted as the message text.
*/


// Create a XMLHttpRequest
req = new XMLHttpRequest();
req.open('GET', '/json/cats.json', true);
req.send(); 
req.onload=function(){
  json=JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
};
    