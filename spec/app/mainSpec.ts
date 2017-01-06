import { Main } from 'app/main';

describe("Main", () => {
  describe("public properties", () => {
    it("has a name", () => {
      const name = "Name";
      let main = new Main(name);

      expect(main.name).toEqual(name);
    });
  });
});
