import { greeter } from "../src/hello";

describe("Util functions", () => {
    it("Greeter test", () => {
      expect(greeter("John")).toEqual("Hello, John!");
    });
  });
