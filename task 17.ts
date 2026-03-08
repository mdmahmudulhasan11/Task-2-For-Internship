function debounce(fn: Function, delay: number) {
  let t: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    clearTimeout(t);

    t = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}