import { board } from "./board";

describe("Given a board function", () => {
  describe("When it receives 10 and 10", () => {
    test("Then it should return a board length of 3", () => {
      const rows = 10;
      const cols = 10;
      const expectedBoardLength = 10;

      const actualOutput = board(rows, cols);

      expect(actualOutput).toHaveLength(expectedBoardLength);
    });
  });
});
