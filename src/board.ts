export const board = (rows: number, cols: number) => {
  const board: number[][] = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let x = 0; x < cols; x++) {
      board[i][x] = Math.floor(Math.random() * 2);
    }
  }

  return board;
};
