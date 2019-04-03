![CF](http://i.imgur.com/7v5ASc8.png) OAuth Comparative Analysis
================================================================

## GitHub OAuth 

### Research Conducted By: Aaron Bruce, Erin Trainor, Joseph Wolfe, Vanessa Wei

### Overall Score and Comments
#### Score (Out of 10): 6
#### General Comments
GitHub oAuth can be used in full stack applications but is generally restricted to access developer community resources. When it is able to be implemented it can provide access to a wide range of information from within the users github account depending on the users privacy settings.

#### Pros
* Can be setup to provide access to complete read/write/edit/delete access to github repositories, user data, and notifications
* Widely recognized platform among developers. 
* Available sign-in option for many developer resource applications.
* Supports multiple code languages

#### Cons
* Limited (and captive) user base
* Not open source
* Average documentation
* User determined privacy settings limit the information that is able to be accessed
  * Example: Email can be hidden
* Fragile callback URLs

### Ratings and Reviews
#### Documentation
Documentation is missing code examples and accessing much of the supporting information requires clicking a link embedded within the text rather than having a clear table of contents. Does not clearly explain how to use the provided access URLs. Written BY experienced developers FOR experienced developers. Documentation does not make clear that application will break if a trailing '/' is not included in the authorization callback URLs

#### Systems Requirements
GitHub oAuth does not require any specific dependencies and can connect to AWS and Heroku. It does not require a specific database.

#### Ramp-Up Projections
Two to three hours to setup the connections. May take additional time to understand the privacy settings because the user email may be excluded from the returned data. Additional data fields may need to be stored in the database to validate a user.

#### Community Support and Adoption levels
Github has 28 million users compared to the 4.4 billion world internet users (0.06%). Github is only available as a login option for applications that are common among the developer community such as Replit, CodePen, Travis, freeCodeCamp, Assembla, WeDeploy, and CSSDeck. GitHub as a platform is almost universally used by the software development community (there were an estimated 18.2 million software developers worldwide in 2018). Github oAuth is not open source so it is exclusively controlled by GitHub (via Microsoft). It is somewhat supported by the developer community through the creation of a variety of configuration tutorials, both in GitHub repos and on independent internet resources.

### Links and Resources
* [docs](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)
* [GitHub OAuth Busy Developer's Guide](https://gist.github.com/technoweenie/419219/5ee1eb7646fd479d398c6855fc2ad35a621c9a1c)
* [GitHub OAuth 2 Tutorial](https://requests-oauthlib.readthedocs.io/en/latest/examples/github.html)
* [YouTube Tutorial Video](https://www.youtube.com/watch?v=wcUdBgktd4s)
* [Wikipedia Github Article](https://en.wikipedia.org/wiki/GitHub)
* [Digital Population Statistics](https://www.statista.com/statistics/617136/digital-population-worldwide)
* [Worldwide Population of Software Developers](https://www.computerworld.com/article/2483690/india-to-overtake-u-s--on-number-of-developers-by-2017.html)


### Code Demos
* [Web-Server](https://fast-bayou-29731.herokuapp.com/)
* [Auth-Server](https://vast-headland-97498.herokuapp.com/)
* [Web-Server Repo](https://github.com/github-oauth/web-server)
* [Auth-Server Repo](https://github.com/github-oauth/auth-server)

### Operating Instructions
* Download both repositories (above)
* Install dependencies `npm i` for both repositories
* `auth-server`
  * Start Mongo Server in `auth-server`
    * E.g., `mongod --dbpath=./data --port 27017`
  * Start Node Server
    * `npm run start` or `npm run watch`
  * Set your environment variables
    * `MONGODB_URI`
    * `PORT`
    * `SECRET`
    * `GITHUB_CLIENT_ID`
    * `GITHUB_SECRET`
* `web-server`
  * Start Node Server
    * `npm run start` or `npm run watch`
* Front End URL
  * http://localhost:8080
* Back End URL
  * http://localhost:3000