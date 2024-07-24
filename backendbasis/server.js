
import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//      res.send('server is ready')
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Another joke 3',
            content: 'This is another joke 3'
        },
        {
            id: 4,
            title: 'Another joke 4',
            content: 'This is another joke 4'
        },

    ]
     res.send(jokes)
});

app.use(express.static('dist'))

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at port ${port}`);
}
);