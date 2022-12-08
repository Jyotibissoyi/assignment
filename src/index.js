const express=require("express")
const {default :mongoose}=require("mongoose")
const route=require("./routes/route.js")
const app= express()



app.use(express.json());


mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://Jyoticoder:Jyoti2025@jyoticoder-cluster.ljxxb2x.mongodb.net/coder", {
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB connected😎😎'))
    .catch(err => console.log(err.message))

app.use('/', route);

app.listen(3000, function () {
    console.log("server running" + 3000)
});

