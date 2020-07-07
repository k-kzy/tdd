const callbackTest = (isSuccess, cb) => {
  setTimeout(() => {
    const err = new Error('reject!');
    const data = 'resolve!';
    return isSuccess ? cb(null, data) : cb(err, null);
  }, 200)
}

test('callback test resolve', done => {
  callbackTest(true, (err, data) => {
    expect(data).toBe('resolve!');
    done();
  })
})

test('callback test reject', done => {
  callbackTest(false, (err, data) => {
    expect(data).toBeNull;
    done();
  })
})
