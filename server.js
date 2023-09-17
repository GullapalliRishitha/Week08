const express = require('express');
const app = express();
const port = 2000;

app.use('/', express.static('public'))

const budget = {
myBudget: [
    {
        title: 'Eat Out!!',
        budget: 30
    },
    {
        title: "Rent",
        budget: 350
    },
    {
        title: "Groceries",
        budget: 90
    }
]   
};

app.get('/budget', (req, res) => {
    res.json(budget);
})

app.listen(port, () =>{
    console.log(`API Started at http://localhost:${port}`);
})
