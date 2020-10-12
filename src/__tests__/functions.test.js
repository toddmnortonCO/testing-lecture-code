const { sum, sayHello } = require('../functions');

// this covers using Jest for unit testing

test(' adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('sum function does not return NaN when 1 + 2 is added together', () => {
    expect(sum(1, 2)).not.toBeNaN()
})

test('sayHello returns a string of "hello" when invoked', () => {
    expect(sayHello()).toBe('hello');
})
