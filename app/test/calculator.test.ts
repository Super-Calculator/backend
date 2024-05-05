import calculate from '../src/calculator';

test('add 1 to 1 and gets 2', () => {
    expect(calculate(1, 1, 0)).toBe(2);
});
