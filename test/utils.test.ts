import { toFarenheit, toCelsius } from "../src/utils";

describe("Temp functions", () => {
    it("-40 == -40", () => {
      expect(toFarenheit(-40)).toEqual(-40);
    });
    it("toCelsius: -40 == -40", () => {
        expect(toCelsius(-40)).toEqual(-40);
      });
  });
