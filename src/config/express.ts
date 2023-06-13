import express, { Express, Request, Response } from 'express';

const app: Express = express()

app.use(express.json())

app.get('/', (request: Request, response: Response) => {
    return response.status(200).send('Server is running')
})

app.use((request: Request, response: Response) => {
    return response.status(404).send('Not Found')
})

export default app