const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')


app.use(express.json())

const bounties = [
    {firstname: "Cere", lastname: "Junda", living: true, bounty: 0, type:"" , _id: uuidv4()},
    {firstname: "Ahsoka", lastname: "Tano", living: true, bounty: 0, type:"" , _id: uuidv4()},
    {firstname: "Mace", lastname: "Windu", living: true, bounty: 0, type:"" , _id: uuidv4()},
    {firstname: "Greez", lastname: "Dritus", living: false, bounty: 0, type:"" , _id: uuidv4()}
]

//routes
app.get("/bounties", (req, res)=>{
    res.send(bounties)
})
//post
app.post("/bounties", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
})
//delete
app.delete("/bounties/:id", (req, res)=>{
    const id = req.params.id
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bounty._id)
    bounties.splice(bountyIndex, 1)
    res.send('${bounties.firstname} ${bounties.lastname} was deleted successfuly')
    })

//put request
app.put("/bounties/:bountyId", (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyUpdate = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bounty._id)
    const updatedBounty = Object.assign(bounties[bountyIndex], bountyUpdate)
    res.send(updatedBounty)
    })
  
    




app.listen(9000, ()=>{
    console.log("Server is running")
})

module.exports = express