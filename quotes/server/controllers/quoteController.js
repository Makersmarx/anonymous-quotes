let quotes = [
    {
       id: 1,
       quote:'Your time is limited, so don’t waste it living someone else’s life.'
    },
    
    {
        id: 2,
        quote:'The two most important days in your life are the day you are born and the day you find out why.'
    },
    
    {
        id: 3, 
        quote:'If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced.'
    }
    
]

let nextId = 4

module.exports = {
    getQuotes: (req,res) => {
        return res.status(200).send(quotes)
    },
    addQuotes: (req, res) => {
        const {quote} = req.body
        const newQuote = {
            id: nextId,
            quote
        }
            nextId++
            quotes.push(newQuote)
            return res.status(200).send(quotes)
    },
    deleteQuotes: (req, res) => {
        const {id} = req.params
        quotes = quotes.filter((e) => e.id !== +id) 
        return res.status(200).send(quotes) 
    },
    editQuotes: (req, res) => {
        const {id} = req.params
        const {quote} = req.body
        const index = quotes.findIndex((element) => {
            return element.id === +id
        })
        quotes[index].quote = quote
        return res.status(200).send(quotes)
}
}