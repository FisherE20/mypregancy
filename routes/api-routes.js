  const mailgunloader = require("mailgun-js");

// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/signin", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.users.email,
      id: req.users.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      
    })
      .then(() => {
        // res.redirect(307, "/api/signin");
        res.end();
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/users", (req, res) => {
    if (!req.users) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        username:  req.users.username,
        duedate: req.users.duedate,
        nickname: req.users.nickname
      });
    }
  });

  app.get("/api/all", (req, res) => {
    db.User.findAll(
    {attributes: ['id', 'email','username']}
    ).then(response => {
      res.send(response)
    });
    
  });

 


app.get('/api/hello', (req,res,next) => {
    res.json('World');
});

let mailgun = mailgunloader({
    apiKey: 'key-696047c12dd5e37a41102745fc72f6f4-53c13666-de69d7c3',
    domain: 'sandbox3a9741201d8a440cb4dbb42f35c4829c.mailgun.org'
});

const sendEmail = (to, from, subject, content) => {
    let data = {
        to,
        from,
        subject,
        text: content
    };
    return mailgun.messages().send(data);
};

app.post('/api/contact', async (req, res, next) => {
    try{
        await sendEmail('flybirdie85@gmail.com', req.body.email, req.body.subject, req.body.message);
        res.send('Email sent!')
    }catch(e){
        console.log(e);
        res.status(500);
    }
});

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });



  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body
      
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

};
