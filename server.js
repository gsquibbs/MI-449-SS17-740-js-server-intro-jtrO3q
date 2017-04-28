// Require Node's http module and assign it to a variable
var http = require('http')

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end('<h1>Hello! :)</h1>')
  } else if (request.url === '/random-joke') {
    var jokeNumber = Math.random()
    if (jokeNumber < 0.3) {
      response.end('<h1><p>Knock Knock!</p><p>Who\'s there?</p><p>Opportunity!</p><p>That is impossible. Opportunity doesn\'t come knocking twice!</p></h1>' + '<h2><a href="https://squibbsg-kappab1hhmo94jtro3q.herokuapp.com/">Welcome Page</a></h2>')
    } else if (jokeNumber < 0.7) {
      response.end('<h1><p>Knock Knock!</p><p>Who\'s there?</p><p>beats.</p><p>Beats who?</p><Beats me!</p></h1>' + '<h2><a href="https://squibbsg-kappab1hhmo94jtro3q.herokuapp.com/">Welcome Page</a></h2>')
    } else {
      response.end('<h1><p>Knock Knock!</p><p>Who\'s there?</p><p>Spell.</p><p>Spell who?</p><p>W-H-O</p></h1>' + '<h2><a href="https://squibbsg-kappab1hhmo94jtro3q.herokuapp.com/">Welcome Page</a></h2>')
    }
  } else if (request.url === '/cuteness') {
    response.end('<h1>Cutie Kitty!</h1>' + '<img src="http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg" alt="Grey Kitten">' + '<h2><a href="https://squibbsg-kappab1hhmo94jtro3q.herokuapp.com/">Welcome Page</a></h2>')
  } else {
    response.end('<h1>Page Not Found</h1>' + '<h2>The requested URL ' + request.url + ' was not found on this server</h2>')
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
