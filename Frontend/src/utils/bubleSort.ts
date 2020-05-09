export default function bubbleSort(a: number[]): number[] {
  let swapp;
  let n = a.length - 1;
  const x = a;
  do {
    swapp = false;
    for (let i = 0; i < n; i += 1) {
      if (x[i] < x[i + 1]) {
        const temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n -= 1;
  } while (swapp);
  return x;
}
