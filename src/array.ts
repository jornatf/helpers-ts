/**
 * crossJoin()
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
 */
export const firstKey = (arr: any[]) => {
    return Array.isArray(arr) && arr.length > 0 ? arr[0] : null
}

/**
 * lastKey()
 */
export const lastKey = (arr: any[]) => {
    return Array.isArray(arr) && arr.length > 0 ? arr[arr.length - 1] : null
}

/**
 * explode()
 */
export const explode = (str: string, sep: string = ',') => {
    return str.split(sep)
}

/**
 * implode()
 */
export const implode = (arr: any[], sep: string = ' ') => {
    return arr.join(sep)
}

/**
 * isEmpty()
 */
export const isEmpty = (arr: any[]) => {
    return Boolean(arr.length == 0)
}

/**
 * shuffle()
 */
export const shuffle = (arr: any[]) => {
    const shuffled = [...arr]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}
