const passport = require('passport')
const LocalStrategy  = require('passport-local').Strategy
const Users =  require('./db.js').Users

passport.serializeUser((user,done)=>{done(null,user.username)})

passport.deserializeUser((username,done)=>{
    Users.findOne({
        username:username
    }).then((user)=>{
        if(!user){return done(new Error("no such user"))}
        return done(null,user)
    }).catch( (err)=>{
        done(err)
    } )
})

passport.use(new LocalStrategy((username,password,done)=>{

    Users.findOne({
        where:{
            username : username
        }
    }).then( (user) =>{
            if(!user){return done(null,false,{message:"no such user -p"})}

            if(user.password !== password)
            {
                return done(null,false,{message:"wrong password -p "})
            }

           return done(null,user)
    }).catch((err)=>{return done(err)})

}))

exports = module.exports = passport