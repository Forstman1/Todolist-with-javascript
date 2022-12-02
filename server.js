 const mysql = require('mysql')

 const connection = mysql.createConnection({
     host: 'localhost',
     user: 'sami',
     password: 'nice',
     database: 'todolist'
 })

connection.connect()

const cors = require('cors')
const { urlencoded } = require('express')
const express = require('express')

const app = express()

let dataUser = {}

let object = {
        name : "",
        password : "",
        status : "false",
        id : -1,
        notes : []
}

app.use(cors())
app.use(urlencoded({extended: true}))


let getData = async (user, password) => 
{

    connection.query(`SELECT * FROM users WHERE (name) LIKE '${user}' && (password) LIKE '${password}'`, async (err, result) => {
        if (!result[0])
            object.status = "false"
        else
        {
            object.name = result[0].name
            object.password = result[0].password
            object.email = result[0].email
            object.status = "true"
        }
    })
}

app.get('/api/:user/:password', async (req, res) => {

    await getData(req.params.user, req.params.password)
    res.json(object)
    res.end()
})


let postData = (user, email, password) => {
    connection.query(`INSERT INTO users (name, email, password) VALUES('${user}', '${email}', '${password}')`, (err, result) => {
        console.log(result)
    })
}


app.post('/api/:email/:user/:password', (req, res) => {

    postData(req.params.user, req.params.email, req.params.password)
    console.log(object.name, object.password, object.email)
    res.json(object)
    res.end()
})

app.listen(3000, ()=> {
    console.log("server running on port 3000")
})
