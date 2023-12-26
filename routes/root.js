const express = require('express')
const router = express.Router()
const path = require('path')

// This route handler, associated with HTTP GET requests to the root path ('/') or '/index' (with or without '.html'),
// serves the 'index.html' file located in the 'views' directory. The regular expression in the route path matches variations
// such as '/index' or '/index.html', providing flexibility for accessing the main page. The 'path.join' function constructs
// the absolute file path, considering the current script's location ('__dirname' represents the directory of the current script).
// When a matching request is received, the server responds by sending the 'index.html' file as the main content for the page.
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router