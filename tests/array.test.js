import {
    crossJoin,
    keyExists,
    firstKey,
    lastKey,
    implode,
    explode,
    isEmpty,
    shuffle,
} from '../src/array'

describe('crossJoin()', () => {
    test('returns all possible combinations of input arrays', () => {
        const output = crossJoin(
            ['red', 'green'],
            ['small', 'medium'],
            ['wood', 'metal']
        )
        const expected = [
            ['red', 'small', 'wood'],
            ['red', 'small', 'metal'],
            ['red', 'medium', 'wood'],
            ['red', 'medium', 'metal'],
            ['green', 'small', 'wood'],
            ['green', 'small', 'metal'],
            ['green', 'medium', 'wood'],
            ['green', 'medium', 'metal'],
        ]
        expect(output).toEqual(expected)
    })

    test('returns single-element arrays', () => {
        const output = crossJoin(['red'], ['small'])
        const expected = [['red', 'small']]
        expect(output).toEqual(expected)
    })
})

describe('keyExists()', () => {
    test('returns "true" if key exists in the array #1', () => {
        const array = ['foo', 'bar', 'baz']
        expect(keyExists('foo', array)).toBe(true)
    })

    test('returns "false" if key does not exist in the array #1', () => {
        const array = ['foo', 'bar', 'baz']
        expect(keyExists('qux', array)).toBe(false)
    })

    test('returns "true" if key exists in the array #2', () => {
        const array = { foo: 'bar', baz: 'qux' }
        expect(keyExists('foo', array)).toBe(true)
    })

    test('returns "false" if key does not exist in the array #2', () => {
        const array = { foo: 'bar', baz: 'qux' }
        expect(keyExists('hello', array)).toBe(false)
    })
})

describe('firstKey(), lastKey()', () => {
    test('returns first key of an array', () => {
        expect(firstKey(['foo', 'bar', 'baz'])).toEqual('foo')
    })

    test('returns last key of an array', () => {
        expect(lastKey(['foo', 'bar', 'baz'])).toEqual('baz')
    })
})

describe('implode(), explode()', () => {
    test('should convert array to string', () => {
        expect(implode(['Hello', 'world'])).toEqual('Hello world')
    })

    test('should convert string to array', () => {
        expect(explode('Hello world', ' ')).toEqual(['Hello', 'world'])
    })
})

describe('isEmpty()', () => {
    test('returns "true" if array is empty', () => {
        expect(isEmpty([])).toBe(true)
    })

    test('returns "false" if array is not empty', () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
    })
})

describe('shuffle()', () => {
    test('returns shuffled array keys', () => {
        const arr = [1, 2, 3, 4, 5]
        const shuffled = shuffle(arr)
        expect(shuffled).not.toEqual(arr)
        expect(shuffled).toHaveLength(arr.length)
        expect(new Set(shuffled)).toEqual(new Set(arr))
    })
})
