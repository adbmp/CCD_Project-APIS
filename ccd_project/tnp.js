//Chamamento dos nodes do Express e The Noun Project API
const express = require('express')
const NounProject = require('the-noun-project');

//Criação de um servidor na porta 3000
const app = express()
const port = 3000;
app.use(express.static('public'))

//Key e Secret da API do Noun Project
nounProject = new NounProject({
    key: '45a662ff9f13446c9885e29717305f0f',
    secret: '6e55ef3913814543be656a9d4a23fb74'
});

//Importação do Nome colocado no input do P5.js
const brandName = require('./public/js/logo_maker.js');

//Fetch dos icons através do nome colocado no input
app.get('/' +brandName, (req, res) => {
    nounProject.getIconsByTerm(brandName, {limit: 20}, function (err, data) {
        if (!err) {
            res.send(data.icons);
        } else {
            console.error (err);
            return undefined;
        }
    });
})

//listen to port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
