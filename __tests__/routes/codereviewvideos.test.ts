import server from "../../src/server";
// import request from "supertest";
const request = require("supertest");

afterEach((done) => {
  server.close();
  done();
});

describe("routes/codereviewvideos", () => {
  const games = ["World of Warships", "Battelfield"];

  games.forEach((game: string) => {
    it(`Should allow adding a game to the list  - ${game}`, async () => {
      const response = await request(server).post("/codereviewvideos").send({
        game,
      });
      expect(response.status).toEqual(201);
      expect(response.type).toEqual("application/json");
      expect(response.body).toEqual({ games: [game] });
    });
  });
});
