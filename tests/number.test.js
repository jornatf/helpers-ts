import { randBetween } from '../src/number'

describe('randBetween()', () => {
    test('returns "true" if output is a number', () => {
        const output = randBetween(0, 5)
        const isNumber = typeof output == 'number'
        expect(isNumber).toBe(true)
    })

    test('returns "true" if the random number is between two intervals', () => {
        const output = randBetween(0, 5)
        const validated = output >= 0 && output <= 5
        expect(validated).toBe(true)
    })
})
