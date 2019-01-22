const request = require("request");

describe('Starting up server', () => {
  // describes expected status to be returned
  describe('GET /testing', () => {
    it("returns status code 200", (done) => {
      request.get('http://localhost:3030/testing', (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      })
    });
  })

  // return a body that matches the entire json format
  describe('GET /testing', () => {
    it("returns message that says success", (done) => {
      request.get('http://localhost:3030/testing', (error, response, body) => {
        expect(body).toBe(`{"message":"success"}`);
        done();
      })
    });
  })
})