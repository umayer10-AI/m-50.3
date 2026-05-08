const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://server4:USoNTGhCCL1STwSE@cluster0.ywso1qs.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        await client.connect();

        const db = client.db("simpleClud4")
        const userCollection = db.collection("users")

        app.get("/user", async (req,res) => {
            const cursor = await userCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get("/user/:id", async (req,res) => {
            const id = req.params.id
            const query = {
                _id: new ObjectId(id)
            }
            const result = await userCollection.findOne(query)
            // console.log(result)
            res.send(result)
        })

        app.post('/user', async (req,res) => {
            const newUser = req.body
            console.log(newUser)
            const result = await userCollection.insertOne(newUser)
            res.send(result)
        })

        app.patch('/user/:id', async (req,res) => {

            const id = req.params.id
            const filter = {
                _id: new ObjectId(id)
            }

            const m = req.body
            const updateDocument = 
            console.log(m)
            // const result = await userCollection.insertOne(newUser)
            // res.send(result)
        })

        app.delete("/user/:id", async (req,res) => {
            const id = req.params.id
            const query = {
                _id: new ObjectId(id)
            }
            const result = await userCollection.deleteOne(query)
            // console.log(result)
            res.send(result)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } 
    finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
