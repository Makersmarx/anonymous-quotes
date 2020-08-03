# anonymous-quotes
3/4 Stack CRUD project practice



### MVP
Description: A quote app that lets your voice be heard a·non·y·mous·ly
</br>
Features:
- User can add quotes
- User can view random quotes
- User can delete quotes
- User can edit quotes


### Server
Dependencies:
- express 

Endpoints:
- app.get('/api/quotes', quoteCtrl.getQuotes)
- app.post('/api/quotes', quoteCtrl.addQuotes)
- app.delete('/api/quotes/:id', quoteCtrl.deleteQuotes)
- app.put('/api/quotes/:id', quoteCtrl.editQuotes)

Structure:
- server/
- index.js
  -controllers/
    - quoteController.js
 

### Client
Dependencies:
- axios

Structure:
- src/
    - App.js
    - App.css
    - reset.css
    - components/
        - AddQuote.js
        - QuoteClass.js
        - Quotes.js
      
