# Review Questions

## What is Node.js?
Node.js is a runtime enviornment that allows us to run javascript outside our browser.

## What is Express?
Express is a web application framework that adds extra functionality like routing
and middleware support

## Mention two parts of Express that you learned about this week.
We learned about middleware which is basically a function that can use the homies and do different
things with them.
We also learned about routing which allows us to break up our code into a more readable
codebase.

## What is Middleware?
Middleware comes after our route('/') but before the homies, it allows us to add
extra functionality to our req and res 

## What is a Resource?
A resource can be anything accesed by the URL that you provide, it can be a list of users,
an object containing cars with their makes and model, or even an array of objects containing
baseball players.

## What can the API return to help clients know if a request was successful?
API can return a status code to let the client know that their request has been succesful.

## How can we partition our application into sub-applications?
We can use routing.

## What is express.json() and why do we need it?
Turns all in the information in the body of the req to a javascript object
