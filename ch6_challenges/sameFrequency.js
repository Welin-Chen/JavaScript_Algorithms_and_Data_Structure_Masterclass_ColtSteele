function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;

  let obj = {};
  for (let i = 0; i < num1.length; i++) {
    let key = num1[i];
    obj[key] = (obj[key] || 0) + 1;
  }
  for (let i = 0; i < num2.length; i++) {
    let key = num2[i];
    if (!obj[key]) {
      return false;
    } else {
      obj[key] = obj[key] - 1;
      if (obj[key] < 0) return false;
    }
  }
  console.log(obj);
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
