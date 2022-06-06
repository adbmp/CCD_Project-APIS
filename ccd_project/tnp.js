//Chamamento dos nodes do Express e The Noun Project API
const express = require('express')
const NounProject = require('the-noun-project');

//Criação de um servidor na porta 3000
const app = express()
const port = 3000;

app.use(express.static('public'))
app.use(express.json());

//Key e Secret da API do Noun Project
nounProject = new NounProject({
    key: '45a662ff9f13446c9885e29717305f0f',
    secret: '6e55ef3913814543be656a9d4a23fb74'
});

//App vai ao handler /receiver recolher a info 
//obtida pela API do conceptNet - Fetch realizado no LogoMaker.js
app.post('/receive', (request, response) => {
    console.log(request.body[3]);

    //Para evitar erros, após termos a info recolhida pelo post, termina-se a resposta.
    response.end();

    //Com os valores obtidos é realizada a busca de icos da API do tnp
    app.get('/' + request.body[3], (req, res) => {
        nounProject.getIconsByTerm(request.body[3], { limit: 2 }, function (err, data) {
            if (!err) {
                res.send(data.icons);
                return data.icons;
            } else {
                console.error(err);
                return undefined;
            }
        });
    })
})

//listen to port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
