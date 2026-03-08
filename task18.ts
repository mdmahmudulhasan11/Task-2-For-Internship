function deepClone(obj: any): any {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arr = [];

    for (let i = 0; i < obj.length; i++) {
      arr.push(deepClone(obj[i]));
    }

    return arr;
  }

  const copy: any = {};

  for (const key in obj) {
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}