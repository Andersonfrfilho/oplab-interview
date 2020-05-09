// Complete the gameOfStones function below.
function gameOfStones(n: number): string {
  return n % 7 === 1 || n % 7 === 0 ? 'Second' : 'First';
}

export default function main(): void {
  const n = [8, 1, 2, 3, 4, 5, 6, 7, 10];
  const t = 8;
  for (let tItr = 0; tItr < t; tItr += 1) {
    console.log(n);
    const result = gameOfStones(n[tItr]);
    console.log(result);
  }
}
