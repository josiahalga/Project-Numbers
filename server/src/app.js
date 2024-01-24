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

app.get('/members/:id', async (req,res) => {
  const member_id = req.params.id
  const member = await database.getMember(member_id)
  res.send(member)
})

app.post('/add_member', async (req,res) => {
  try {
    const { 
    last_name, 
    suffix, 
    first_name, 
    middle_name, 
    birthdate, 
    status, 
    occupation, 
    sex, 
    blood_type, 
    street_address, 
    barangay, 
    city, 
    cell_no, 
    landline, 
    email_address, 
    fb_username, 
    baptism_status, 
    deceased, 
    auxiliary } = req.body
    const new_member = await database.createMember(last_name, suffix, first_name, middle_name, birthdate, status, occupation, sex, blood_type, street_address, barangay, city, cell_no, landline, email_address, fb_username, baptism_status, deceased, auxiliary)
    res.send(new_member)
  } catch (err) {
    console.log(err)
    res.status(400).send({
      error: 'Error Occured'
    })
  }
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