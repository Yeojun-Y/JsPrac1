function solution(n) {
  let pizza = n;
  while (pizza % 6 !== 0) {
    pizza += n;
  }
  return pizza / 6
}

