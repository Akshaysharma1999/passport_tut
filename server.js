const express  = require('express')
const session = require('express-session')
const passport = require('./passport')

const app = express()

app.set('view engine','hbs')

app.use(express.json() )
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:"somesecret"
}))

app.use(passport.initialize())
app.use(passport.session())



app.use('/public',require('./routes/public'))
app.use('/private',require('./routes/private'))
app.use('/',require('./routes/root'))

app.listen(6789, () => console.log('http://localhost:6789'))