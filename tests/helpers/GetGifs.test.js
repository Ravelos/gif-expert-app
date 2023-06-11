import { getGifs } from "../../src/helpers/GetGifs";

describe("Testing the GetGifs Helper", () => {

  test("should return an array of gifs", async () => {
    const gifs = await getGifs('Dragon Ball');
    expect(gifs.length).toBeGreaterThan(0);
    expect( gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
    })
  });

});
