const request = require("supertest");
const { app, server } = require("../index");

test('GET / should return "Hello, World!"', async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toContain("Hello, World!");
});

afterAll((done) => {
  // Close the server after all tests are done
  server.close(() => {
    console.log("Server closed");
    done();
  });
});
