<h1> techNotes - Backend </h1> 

<h4>This repository is created with the help of <a href="https://www.youtube.com/@DaveGrayTeachesCode">Dave Gray</a> Tutorial and the specific aim for this repository is understanding the main concept of CRUD and MERN</h4>
<p>Note: Everything will be explained based on repository folders.</p>
<h3>Repository Index:</h3>
<lu>
  <li><a href="">Project Dependicies</a></li>
  <li><a href="https://github.com/Doguhannilt/techNotes-backend/tree/master#routes">Routes</a></li>
  <li><a href="">Middleware</a></li>
  <li><a href="">Controllers</a></li>
  <li><a href="">MongoDB Connection</a></li>
</lu>

<h1>Project Dependecies</h1>
<table>
  <tr>
    <th>Package</th>
    <th>Version</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>bcrypt</code></td>
    <td>^5.1.1</td>
    <td>Library for hashing passwords.</td>
  </tr>
  <tr>
    <td><code>cookie-parser</code></td>
    <td>^1.4.6</td>
    <td>Middleware to parse and set cookies in Express.</td>
  </tr>
  <tr>
    <td><code>cors</code></td>
    <td>^2.8.5</td>
    <td>Middleware for enabling CORS in Express.</td>
  </tr>
  <tr>
    <td><code>date-fns</code></td>
    <td>^3.0.6</td>
    <td>Library for handling dates in JavaScript.</td>
  </tr>
  <tr>
    <td><code>dotenv</code></td>
    <td>^16.3.1</td>
    <td>Zero-dependency module to load environment variables.</td>
  </tr>
  <tr>
    <td><code>express</code></td>
    <td>^4.18.2</td>
    <td>Web application framework for Node.js.</td>
  </tr>
  <tr>
    <td><code>express-async-handler</code></td>
    <td>^1.2.0</td>
    <td>Utility to handle asynchronous errors in Express routes.</td>
  </tr>
  <tr>
    <td><code>mongoose</code></td>
    <td>^8.0.3</td>
    <td>MongoDB object modeling for Node.js.</td>
  </tr>
  <tr>
    <td><code>mongoose-sequence</code></td>
    <td>^6.0.0</td>
    <td>Plugin for Mongoose to auto-increment fields.</td>
  </tr>
  <tr>
    <td><code>uuid</code></td>
    <td>^9.0.1</td>
    <td>Library for generating unique identifiers.</td>
  </tr>
</table>


<h1>Routes</h1>


<table>
  <tr>
    <th>Concept</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Express</td>
    <td>This line imports the Express.js framework, a web application framework for Node.js.</td>
  </tr>
  <tr>
    <td>Router</td>
    <td><code>express.Router()</code> creates an instance of a router. Routers are used to handle different routes in a web application.</td>
  </tr>
  <tr>
    <td>Controller</td>
    <td>The <code>usersController</code> is an external module that likely contains functions to handle various operations related to users, such as fetching all users, creating a new user, updating a user, and deleting a user.</td>
  </tr>
  <tr>
    <td>Route Definitions</td>
    <td></td>
  </tr>
  <tr>
    <td><code>.route('/'):</code></td>
    <td>This defines a route for the root path ('/').</td>
  </tr>
  <tr>
    <td><code>.get(usersController.getAllUsers):</code></td>
    <td>Handles HTTP GET requests to the root path by calling the <code>getAllUsers</code> function from the <code>usersController</code>. This is typically used to retrieve all users.</td>
  </tr>
  <tr>
    <td><code>.post(usersController.createNewUser):</code></td>
    <td>Handles HTTP POST requests to the root path by calling the <code>createNewUser</code> function from the <code>usersController</code>. This is typically used to create a new user.</td>
  </tr>
  <tr>
    <td><code>.patch(usersController.updateUser):</code></td>
    <td>Handles HTTP PATCH requests to the root path by calling the <code>updateUser</code> function from the <code>usersController</code>. This is typically used to update an existing user.</td>
  </tr>
  <tr>
    <td><code>.delete(usersController.deleteUser):</code></td>
    <td>Handles HTTP DELETE requests to the root path by calling the <code>deleteUser</code> function from the <code>usersController</code>. This is typically used to delete an existing user.</td>
  </tr>
  <tr>
    <td>Export</td>
    <td>Finally, <code>module.exports = router;</code> exports the router instance so that it can be used in other parts of the application.</td>
  </tr>
</table>



<h1>Middleware</h1>

<table>
  <tr>
    <th>File/Module</th>
    <th>Description</th>
    <th>Function/Method</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td rowspan="2">logger.js</td>
    <td rowspan="2">Defines logging functionality</td>
    <td><code>logEvents</code></td>
    <td>Logs events to files with timestamps, unique identifiers, and messages.</td>
  </tr>
  <tr>
    <td><code>logger</code></td>
    <td>Middleware that logs incoming requests, both to a file and to the console.</td>
  </tr>
  <tr>
    <td rowspan="2">errorHandler.js</td>
    <td rowspan="2">Defines error handling middleware</td>
    <td><code>errorHandler</code></td>
    <td>Logs errors, including error name, message, request method, URL, and origin. Sends a JSON response with the error message.</td>
  </tr>
</table>

<h1>Controllers</h1>

<table>
  <tr>
    <th>Function</th>
    <th>Description</th>
    <th>Route</th>
    <th>Access</th>
  </tr>
  <tr>
    <td><code>getAllUsers</code></td>
    <td>Get all users (excluding passwords).</td>
    <td>GET /users</td>
    <td>Private</td>
  </tr>
  <tr>
    <td><code>createNewUser</code></td>
    <td>Create a new user with the provided data.</td>
    <td>POST /users</td>
    <td>Private</td>
  </tr>
  <tr>
    <td><code>updateUser</code></td>
    <td>Update an existing user with new data.</td>
    <td>PATCH /users</td>
    <td>Private</td>
  </tr>
  <tr>
    <td><code>deleteUser</code></td>
    <td>Delete an existing user. Checks for associated notes before deletion.</td>
    <td>DELETE /users</td>
    <td>Private</td>
  </tr>
</table>

<h2>Function Implementations:</h2>

<code>getAllUsers:</code> Retrieves all users, excluding their passwords. If no users are found, a 400 status with a corresponding message is returned.

<code>createNewUser:</code> Creates a new user with provided data. Checks for required fields and duplicate usernames. Hashes the password before storing it. Returns a status indicating success or failure.

<code>updateUser:</code> Updates an existing user with new data. Checks for required fields, duplicates, and allows updates to the original user. Hashes the new password if provided. Returns a status indicating success or failure.

<code>deleteUser:</code> Deletes an existing user after checking for associated notes. Returns a status indicating success or failure.
<p>Also you can check my private document: <a href="https://github.com/Doguhannilt/techNotes-backend/blob/master/controllers/usersController.doc">HERE</a></p>

<h1>CORS</h1>

<table>
  <tr>
    <th>Property</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>origin</code></td>
    <td>A function that checks whether requests coming from the specified origin are allowed. In the example above, origins listed in the <code>allowedOrigins</code> array are permitted. If the origin is allowed, it responds with <code>callback(null, true)</code>; otherwise, it responds with <code>callback(new Error('Not allowed by CORS'))</code>.</td>
  </tr>
  <tr>
    <td><code>credentials</code></td>
    <td>A boolean value. If true, the browser can include credentials (such as cookies and HTTP authentication information) in the request.</td>
  </tr>
  <tr>
    <td><code>optionsSuccessStatus</code></td>
    <td>Determines the status code indicating a successful processing of HTTP OPTIONS requests. In the example, it is set to 200.</td>
  </tr>
</table>
<h1>MongoDB Connection</h1>


<table>
  <tr>
    <th>Variable</th>
    <th>Description</th>
    <th>Value</th>
  </tr>
  <tr>
    <td><code>MONGO_URI</code></td>
    <td>MongoDB connection URI.</td>
    <td>Replace with your actual MongoDB URI.</td>
  </tr>
  <tr>
    <td><code>MONGO_OPTIONS</code></td>
    <td>MongoDB connection options.</td>
    <td>Specify additional options (e.g., <code>{ useNewUrlParser: true, useUnifiedTopology: true }</code>).</td>
  </tr>
  <tr>
    <td><code>connectToMongoDB</code></td>
    <td>Function to connect to MongoDB.</td>
    <td>Uses <code>mongoose.connect</code> with the provided URI and options.</td>
  </tr>
  <tr>
    <td><code>mongoose</code></td>
    <td>Mongoose library instance.</td>
    <td>Imported instance of the Mongoose library for MongoDB interactions.</td>
  </tr>
</table>

<h1>Contact</h1>

<h4>Feel free to get contact with me: <a href="doguhannilt@gmail.com"><i>My Mail</i></a></h4>




