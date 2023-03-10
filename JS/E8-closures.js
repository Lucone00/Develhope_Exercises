function multiplyByTwo(number) {
  function inner(num) {
    return num * number;
  }
  return inner;
}

const result = multiplyByTwo(4)(2);
console.log(result);
