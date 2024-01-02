<h1> techNotes - Backend </h1> 

<h4>This repository is created with the help of <a href="https://www.youtube.com/@DaveGrayTeachesCode">Dave Gray</a> Tutorial and the specific aim for this repository is understanding the main concept of CRUD and MERN</h4>
<p>Note: Everything will be explained based on repository folders.</p>
<h3>Repository Index:</h3>
<lu>
  <li><a href="">Routes</a></li>
  <li><a href="">Logger and ErrorHandler</a></li>
  <li><a href="">Controllers</a></li>
  <li><a href="">MongoDB Connection</a></li>
</lu>

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
