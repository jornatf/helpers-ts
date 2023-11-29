/**
 * Joins arrays and returns all possible combinations of input arrays.
 * @example crossJoin(['red', 'green'], ['small', 'medium'])
 * // [['red', 'small'], ['red','medium'], ['green', 'small'], ['green','medium']]
 * @param arrays Array
 * @returns New array with combinations
 */
export const crossJoin = (...arrays: any): any => {
    if (arrays.length === 1) {
        return arrays[0].map((value: any) => [value])
    }
    const [firstArray, ...remainingArrays] = arrays
    const combinations = crossJoin(...remainingArrays)
    return firstArray.flatMap((value: any) =>
        combinations.map((combination: any) => [value, ...combination])
    )
}

/**
 * Checks if a key exists in an array.
 * @example keyExists('foo', ['foo', 'bar', 'baz']) // true
 * @example keyExists('qux', ['foo', 'bar', 'baz']) // false
 * @example keyExists('foo', { foo: 'bar', baz: 'qux' }) // true
 * @param key Key to search
 * @param collection Where search
 * @returns Boolean
 */
export const keyExists = (key: string, collection: any): boolean => {
    if (Array.isArray(collection)) {
        return collection.includes(key)
    } else if (typeof collection === 'object') {
        return key in collection
    } else {
        return false
    }
}

/**
 * Returns first key from an array.
 * @example firstKey(['foo', 'bar', 'baz']) // 'foo'
 * @param arr Array
 * @returns Key
 */
export const firstKey = (arr: any[]): string|number|null => {
    return Array.isArray(arr) && arr.length > 0 ? arr[0] : null
}

/**
 * Returns last key from an array.
 * @example lastKey(['foo', 'bar', 'baz']) // 'baz'
 * @param arr Array
 * @returns Key
 */
export const lastKey = (arr: any[]): string|number|null => {
    return Array.isArray(arr) && arr.length > 0 ? arr[arr.length - 1] : null
}

/**
 * Converts a string into array.
 * @example explode('Foo,Bar') // ['Foo', 'Bar']
 * @example implode('Foo Bar', ' ') // ['Foo', 'Bar']
 * @param str String to explode
 * @param sep Separator to search (comma by default)
 * @returns Array
 */
export const explode = (str: string, sep: string = ','): string[] => {
    return str.split(sep)
}

/**
 * Converts an array into string.
 * @example implode(['Foo', 'Bar']) // 'Foo Bar'
 * @example implode(['Foo', 'Bar'], ', ') // 'Foo, Bar'
 * @param arr Array to implode
 * @param sep Separator (space by default)
 * @returns String
 */
export const implode = (arr: any[], sep: string = ' '): string => {
    return arr.join(sep)
}

/**
 * Checks if an array is empty.
 * @example isEmpty([]) // true
 * @example isEmpty([1, 2, 3]) // false
 * @param arr Array to check
 * @returns Boolean
 */
export const isEmpty = (arr: any[]): boolean => {
    return Boolean(arr.length == 0)
}

/**
 * Shuffles array keys.
 * @example shuffle([1, 2, 3, 4]) // [3, 1, 4, 2]
 * @param arr Array to suffle
 * @returns Shuffled array
 */
export const shuffle = (arr: any[]) => {
    const shuffled = [...arr]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}
