const express = require('express')
const app = express()

// controller
const quoteCtrl = require('./controllers/quoteController')



// Port being used
const port = 8000


app.use(express.json())


// Endpoints
app.get('/api/quotes', quoteCtrl.getQuotes)
app.post('/api/quotes', quoteCtrl.addQuotes)
app.delete('/api/quotes/:id', quoteCtrl.deleteQuotes)
app.put('/api/quotes/:id', quoteCtrl.editQuotes)

app.listen(port, () => console.log(`We got ya at Port: ${port}`))

