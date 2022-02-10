const express  = require('express');
const Discord = require("discord.js")
const session  = require('express-session');
const client = new Discord.Client();
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const passport = require('passport');
const db = require('./database/databasebot/mongodb.js')
const ms = require('pretty-ms')
const Strategy = require('./discord/site/login/Strategy.js').Strategy;
const { checkAuth } = require('./discord/site/login/checkAuth.js');
app.use(session({
    secret: 'youshallnotpass',
    resave: false,
    saveUninitialized: false
}));
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
const scopes = ['identify', 'email', 'guilds'];
passport.use(new Strategy({
    clientID: '777936158638342175',
    clientSecret: 'hOm1x5DOCPoEiP8gR18azFT-bSzh66tO',
    callbackURL: 'https://duiconfig.vitorxp.repl.co/callback',
    scope: scopes
}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        return done(null, profile);
    });
}));
app.use(passport.initialize());
app.use(passport.session())
app.get('/', function(req, res) {
res.cookie("lasturl", req.url);
db.Bots.findOne({ _id: "552086755956883456" }, async function (e, d) {
  
   if (!d) {
   await new db.Bots({
      _id: "552086755956883456",
      cmdUsd: 1,
     uptime: 1,
     srvs: 1,
     users: 1,
     uptime2: 1
    }).save();
   }
       if (!d) return res.redirect("/")
    if (d) {
  res.render('index.ejs',{ 
   logged: req.isAuthenticated(),
      username: req.user ? req.user.username : "",
      descrim : req.user ? req.user.discriminator : "",
    avatarurl: req.user ? `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}?size=2048` : "",
  })
    }
})
})
app.use(express.static('public'));
app.get("/login", passport.authenticate("discord", { scope: scopes }), function(
  req,
  res
) {});
app.get(
  "/callback",
  passport.authenticate("discord", { failureRedirect: "/" }),
  function(req, res) {
    return res.redirect(req.cookies.lasturl);
  }
);
app.get('/sair', function(req, res) {
    req.logout();
    res.redirect(req.cookies.lasturl);
});
app.get('/info', checkAuth, function(req, res) {
   console.log("O "+req.user ? req.user.username : ""+" Esta Logado Com O Discord!")
    res.json("O "+req.user ? req.user.username : ""+" Esta logado Com O Discord!");
});
app.listen(3000, function (err) {
   console.log("Listening on: 3000");
})
client.on("ready", ()=> {
  console.log("o WebBot esta online!")
})
client.login(process.env.tokenbot);
