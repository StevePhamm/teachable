/*

You've seen several of these methods before. Here the open method initializes the request as a "POST" 
to the given URL of the external resource, and uses the true Boolean to make it asynchronous.

The setRequestHeader method sets the value of an HTTP request header, which contains information about 
the sender and the request. It must be called after the open method, but before the send method. 
The two parameters are the name of the header and the value to set as the body of that header.

Next, the onreadystatechange event listener handles a change in the state of the request. 
A readyState of 4 means the operation is complete, and a status of 200 means it was a successful request. 
The document's HTML can be updated.

Finally, the send method sends the request with the userName value, which was given by the user in the input field.

*/

req=new XMLHttpRequest();
req.open("POST",url,true);
req.setRequestHeader('Content-Type','text/plain');
req.onreadystatechange=function(){
  if(req.readyState==4 && req.status==200){
    document.getElementsByClassName('message')[0].innerHTML=req.responseText;
  }
};
req.send(userName);