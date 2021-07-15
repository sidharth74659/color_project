// @ts-nocheck

const express = require('express');
const mongoose = require('mongoose')
const User = require('./models/User')

const port = 3000;
const app = express();

mongoose.connect('mongodb://localhost/dbTwo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// (async () => {
//     const joker = await new User({ name: 'joker' })
//     joker.save();
// })()

app.use('/', express.static('public'))
app.use(express.json())


app.get('/db/read', async (req, res) => {
    
    const { colors: { unsorted: unsortedColors } } = await User.findOne({ name: 'joker' });

    res.json({ unsortedColors: unsortedColors })
})


app.post('/db/create', async (req, res) => {

    const { newColor } = req.body;
    await User.updateOne({ name: 'joker' }, { "$addToSet": { "colors.unsorted": newColor } });
    
    res.json(newColor)
    res.end()
})


app.listen(port, () => {
    console.log("listening to the server");
})