import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import database from './database.js' // eslint-disable-line no-unused-vars

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/members_list', async (req,res) => {
  const members = await database.getMembers()
  res.send(members)
})

app.post('/member_id', async (req,res) => {
  const member = await database.getMember(req.body.member_id)
  res.send(member)
})

app.post('/register', (req,res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered`
  })
})

const port = 8081
app.listen(port, () => {
  console.log('Server is running on port', port)
})