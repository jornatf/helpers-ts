/**
 * Converts a string into slug.
 * @example slugify('Hello world') // 'hello_world'
 * @example slugify('Hello world', '-') // 'hello-world'
 * @param str String to slugify
 * @param sep Seperator (underscore by default)
 * @returns Slugified string
 */
export const slugify = (str: string, sep: string = '_'): string => {
    return str.toLowerCase().replace(/ /g, sep)
}

/**
 * Converts a string into camelCase.
 * @example toCamel('Hello world')
 * // 'helloWorld'
 * @param str String to convert
 * @returns String into camelCase format
 */
export const toCamel = (str: string): string => {
    return str
        .replace(/\s+(.)/g, (match, char) => char.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, (match, char) => char.toLowerCase())
}

/**
 * Converts a string into PascalCase
 * @example slugify('Hello world')
 * // 'HelloWorld'
 * @param str String to convert
 * @returns String into PascalCase format
 */
export const toPascal = (str: string): string => {
    return str
        .replace(/\s+(.)/g, (match, chr) => chr.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, (match, chr) => chr.toUpperCase())
}

/**
 * Checks if a sring is a valid uuid.
 * @example isUuid('5c5a300f-20fb-416f-b026-6f53f8bdc7f5') // true
 * @example isUuid('not-uuid') // false
 * @param str Uuid string
 * @returns Boolean
 */
export const isUuid = (str: string): boolean => {
    const regex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    return regex.test(str)
}

/**
 * Returns a random and unique Uuid.
 * @example uuid()
 * // '5c5a300f-20fb-416f-b026-6f53f8bdc7f5'
 * @returns Uuid string
 */
export const uuid = (): string => {
    return crypto.randomUUID()
}

/**
 * Truncate a string with a specified number of characters.
 * @example limitStr('This is a long string that needs to be limited.', 20)
 * // 'This is a long strin...'
 * @param str String to truncate
 * @param maxLength Max length (default: 20)
 * @returns Truncated string
 */
export const limitStr = (str: string, maxLength: number = 20): string => {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str
}

/**
 * Returns a random string with a specified number of characters.
 * @example randomStr(6)
 * // 'ab12c3'
 * @param length Number of character (default: 10)
 * @returns Random string
 */
export const randomStr = (length: number = 10): string => {
    let result = ''
    const char =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charLength = char.length
    for (let i = 0; i < length; i++) {
        result += char.charAt(Math.floor(Math.random() * charLength))
    }
    return result
}

/**
 * Replaces occurrences of a string by another.
 * @example replaceStr('world', 'earth', 'Hello world')
 * // 'Hello earth'
 * @param search String to replace
 * @param replacement Replacement string
 * @param str Target
 * @returns New string
 */
export const replaceStr = (
    search: string,
    replacement: string,
    str: string
): string => {
    return str.split(search).join(replacement)
}

/**
 * Trims and removes extra spaces between words with a specified number of space.
 * @example squish(' Hello     world ', 5)
 * // 'Hello world'
 * @param str Target
 * @param numSpaces Number of space (default: 1)
 * @returns Modified string
 */
export const squish = (str: string, numSpaces: number = 1): string => {
    const regex = new RegExp(`\\s{${numSpaces},}`, 'g')
    return str.replace(regex, ' '.repeat(numSpaces)).trim()
}

/**
 * Checks if a word is in a string.
 * @example contains('world', 'Hello world') // true
 * @example contains('earth', 'Hello world') // false
 * @param word Word to check
 * @param str String where the word is
 * @returns Boolean
 */
export const contains = (word: string, str: string): boolean => {
    return str.includes(word)
}

/**
 * Check if many words are in a string.
 * @example containsAll(['string', 'test'], 'This is a string.'
 * // true
 * @example containsAll(['number', 'test'], 'This is a string.')
 * // false
 * @param words Words list in an array
 * @param str String to check
 * @returns Boolean
 */
export const containsAll = (words: string[], str: string): boolean => {
    for (const word of words) {
        return !str.includes(word) ? false : true
    }
    return true
}
