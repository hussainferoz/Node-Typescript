import supertest from "supertest";

import app from '../src/config/express'

describe('Server Status', () => {
    const request = supertest(app)

    test('Should Resolve With Status 200 When Server Is Running', async () => {
        const response = await request.get('/')
        expect(response.statusCode).toEqual(200)
        expect(response.text).toEqual('Server is running')
    })

    test('Should Resolve With Status 404 When Route Is Not Found', async () => {
        const response = await request.get('/not-found')
        expect(response.statusCode).toEqual(404)
        expect(response.text).toEqual('Not Found')
    })
})