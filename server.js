

const cors = require('cors')
const { urlencoded } = require('express')
const express = require('express')

const app = express()


app.use(cors())
app.use(urlencoded({extended: true}))


app.get('/api/:user/:password', (req, res) => {
    let object = {
        name : req.params.user,
        password : req.params.password,
        status : "true"
    }
    console.log(object.name, object.password)
    res.json(object)
    res.end()
})

app.listen(3000, ()=> {
    console.log("server running on port 3000")
})
