/**
 * crossJoin()
 * @param  {...any} arrays
 * @returns {array}
 */
export const crossJoin = (...arrays: any) => {
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
 * keyExists()
 * @param {string} key
 * @param {any} collection
 * @returns {boolean}
 */
export const keyExists = (key: string, collection: any) => {
    if (Array.isArray(collection)) {
        return collection.includes(key)
    } else if (typeof collection === 'object') {
        return key in collection
    } else {
        return false
    }
}

/**
 * firstKey()
 * @param {array} arr
 * @returns {string}
 */
export const firstKey = (arr: any[]) => {
    return Array.isArray(arr) && arr.length > 0 ? arr[0] : null
}

/**
 * lastKey()
 * @param {array} arr
 * @returns {string}
 */
export const lastKey = (arr: any[]) => {
    return Array.isArray(arr) && arr.length > 0 ? arr[arr.length - 1] : null
}

/**
 * explode()
 * @param {string} str
 * @param {string} sep
 * @returns {array}
 */
export const explode = (str: string, sep: string = ',') => {
    return str.split(sep)
}

/**
 * implode()
 * @param {array} arr
 * @param {string} sep
 * @returns {string}
 */
export const implode = (arr: any[], sep: string = ' ') => {
    return arr.join(sep)
}
