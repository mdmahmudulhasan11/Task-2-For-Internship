function rateLimiter(fn: Function, limit: number, interval: number) {
  let count = 0;

  setInterval(() => {
    count = 0;
  }, interval);

  return function (...args: any[]) {
    if (count < limit) {
      count++;
      fn(...args);
    } else {
      console.log("Rate limit exceeded");
    }
  };
}