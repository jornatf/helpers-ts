import {
    toCamel,
    toPascal,
    slugify,
    isUuid,
    uuid,
    limitStr,
    randomStr,
    replaceStr,
    squish,
} from '../src/string'

describe('toCamel()', () => {
    test('should convert a string to camelCase', () => {
        const str = 'hello world'
        expect(toCamel(str)).toEqual('helloWorld')
    })
})

describe('toPascal()', () => {
    test('should convert a string to PascalCase', () => {
        const str = 'hello world'
        expect(toPascal(str)).toEqual('HelloWorld')
    })
})

describe('slugify()', () => {
    test('should convert a string to slug with default separation', () => {
        const str = 'hello world'
        expect(slugify(str)).toEqual('hello_world')
    })

    test('should convert a string to slug', () => {
        const str = 'hello world'
        expect(slugify(str, '-')).toEqual('hello-world')
    })
})

describe('isUuid(), uuid()', () => {
    test('returns "true" for a valid UUID', () => {
        const uuid = '5c5a300f-20fb-416f-b026-6f53f8bdc7f5'
        expect(isUuid(uuid)).toBe(true)
    })

    test('returns "false" for an invalid UUID', () => {
        const notUuid = 'not-uuid'
        expect(isUuid(notUuid)).toBe(false)
    })

    test('returns a string of length 36', () => {
        expect(uuid()).toHaveLength(36)
    })

    test('returns "true" if a valid UUID format', () => {
        expect(isUuid(uuid())).toBe(true)
    })
})

describe('limitStr()', () => {
    test('limits a string to 20 characters', () => {
        const str = 'This is a long string that needs to be limited.'
        expect(limitStr(str, 20)).toEqual('This is a long strin...')
    })

    test('returns the original string if < 20 characters', () => {
        const str = 'Short string.'
        expect(limitStr(str, 20)).toEqual('Short string.')
    })
})

describe('randomStr()', () => {
    test('generates a random string of 10 characters', () => {
        const random = randomStr(10)
        expect(random.length).toBe(10)
    })
})

describe('replaceStr()', () => {
    test('replaces occurrences of a string', () => {
        const str = 'hello world'
        expect(replaceStr('world', 'earth', str)).toEqual('hello earth')
    })
})

describe('squish()', () => {
    test('trims and removes extra spaces between words with 1 space (default)', () => {
        const str = '   Hello      world!  '
        expect(squish(str)).toEqual('Hello world!')
    })

    test('trims and removes extra spaces between words with 2 spaces', () => {
        const str = '   Hello      world!  '
        expect(squish(str, 2)).toEqual('Hello  world!')
    })

    test('trims and removes extra spaces between words without space', () => {
        const str = '   Hello      world!  '
        expect(squish(str, 0)).toEqual('Helloworld!')
    })
})
