const express = require('express')
const path = require('path')
const app = express()
const port = 3010

const jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "Why did the chicken cross the playground?",
        punchline: "To get to the other slide."
    }
];

const root = path.join(__dirname, 'public')
app.use(express.static(root))

app.get('/', (request, response) => {
    response.sendFile('index.html', { root });
});




app.get('/api/v1/random-joke', (request, response) => {
    const j = jokes[Math.floor(Math.random() * jokes.length)];
    response.json(j);
});

app.listen(port, () => console.log(`listening on port: ${port}`))
