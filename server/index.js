require('dotenv').config()
const express =require('express')
const massive = require('massive')
const session = require('express-session')
const cors = require('cors')
const authCtrl = require('./AuthController')
const userCtrl = require('./UserController')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = (express())

app.use(express.json())
app.use(cors())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 60000 * 10
    }
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

app.put('/user/foods/:id', userCtrl.favFoods)
app.post(`/user/addRecipe/:id`, userCtrl.submitRecipe)
app.get('/user/dashboard/:id', userCtrl.dashboardRecipes)
app.get('/user/allRecipes', userCtrl.allRecipes)
app.get('/user/recipes' , userCtrl.userRecipes)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

app.listen(SERVER_PORT, () => console.log(`server live on port ${SERVER_PORT} 📱`))
})




