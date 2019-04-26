import express from 'express';

const app = express();

app.get('/', async function (req, res) {
    res.status(200).send(`Hello, ${process.env.WORLD}`);
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
