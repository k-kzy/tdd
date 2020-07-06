const convert = require('./convert');
const output = require('./output');

describe('FizzBuzz test', () => {
  test('1を渡したら文字列"1"を返す', () => {
    expect(convert(1)).toBe("1")
  });

  test('2を渡したら文字列"2"を返す', () => {
    expect(convert(2)).toBe("2")
  });

  test('3を渡したら文字列"Fizz"を返す', () => {
    expect(convert(3)).toBe("Fizz")
  });

  test('5を渡したら文字列"Buzz"を返す', () => {
    expect(convert(5)).toBe("Buzz")
  });

  test('3と5両方の倍数を渡したら文字列"FizzBuzz"を返す', () => {
    expect(convert(15)).toBe("FizzBuzz")
  });

  test('100回プリントしたか', () => {
    expect(output(100)).toBe(100)
  });
});
