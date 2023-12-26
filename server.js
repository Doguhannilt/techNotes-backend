// Required libraries
const express = require('express')
const app = express()
const path = require('path')
// PORT 
const PORT = process.env.PORT || 3500


// This middleware configuration serves static files from the 'public' directory
// when a request is made to the root path ('/') of the Express application.
// The path to the 'public' directory is resolved using __dirname, which represents
// the current directory of the script. This enables serving static assets such
// as HTML, CSS, and client-side JavaScript files when accessing the root route.
// Example: If there is a file 'example.html' in the 'public' directory, it can be
// accessed in the browser by navigating to 'http://yourdomain.com/example.html'.
app.use('/', express.static(path.join(__dirname, '/public')))


// This middleware configuration associates the root path ('/') of the Express
// application with the routes defined in the 'root.js' file. The 'require' function
// is used to import the routes module from the specified file path, and the middleware
// is applied to handle requests to the root path. This modular approach allows for
// better organization of routes and promotes maintainability by separating the
// route handling logic into separate files. Ensure that the 'root.js' file exports
// the necessary route handlers using the 'module.exports' syntax.
app.use('/', require('./routes/root'))


// This middleware function handles all requests that do not match any defined routes.
// It responds with a 404 status code and provides different responses based on the client's
// accepted content type. If the client accepts HTML, it sends the contents of the '404.html'
// file located in the 'views' directory. If the client accepts JSON, it sends a JSON response
// with a 'message' property set to "404 Not Found". For other content types, it sends a plain
// text response with '404 Not Found'. This approach ensures a suitable response format based on
// the client's preferences, promoting a user-friendly experience for both web browsers and
// applications that consume the API.
app.all('*', (req,res) =>{
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if(req.accepts('json')){
        res.json({message: "404 Not Found"})
    }else{
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, () => {
    console.log("Server Running...")
})