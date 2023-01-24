function factorial(n) {
  let s = 1;
  if (n == 0 || n == 1) {
    return 1;
  } else if (n < 0) {
    return false;
  } else {
    for (let i = 1; i <= n; i++) {
      s = s * i;
    }
  }
  return s;
}
console.log(factorial(2));
