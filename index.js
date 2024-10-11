const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/',(req,res) =>
{
   res.sendFile(__dirname + '/public/index.html')
}
);
//Lancement serveur
app.listen(port, ()=>
    {
        console.log(`E-Commerce app listening at http://localhost: ${port}`);
    });