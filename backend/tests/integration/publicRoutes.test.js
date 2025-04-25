describe("Public Routes", () => {
  let request;

  beforeAll(() => {
    request = require("supertest")(require("../../src/app.js"));
  });

  it("deve responder com pong", async () => {
    const res = await request.get("/ping");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "pong" });
    expect(res.body.message).toBeDefined();
    expect(res.body.message).toMatch(/pong/);
  });

  it("deve receber status 200", async () => {
    const res = await request.get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBeDefined();
    expect(res.text).toMatch(/English Audio Connect API is running!/i);
  });
});
