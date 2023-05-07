/**
 * slugify()
 */
export const slugify = (str: string, sep: string = '_') => {
    return str.toLowerCase().replace(/ /g, sep)
}

/**
 * toCamel()
 */
export const toCamel = (str: string) => {
    return str
        .replace(/\s+(.)/g, (match, char) => char.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, (match, char) => char.toLowerCase())
}

/**
 * toPascal()
 */
export const toPascal = (str: string) => {
    return str
        .replace(/\s+(.)/g, (match, chr) => chr.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, (match, chr) => chr.toUpperCase())
}

/**
 * isUuid()
 */
export const isUuid = (str: string) => {
    const regex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    return regex.test(str)
}

/**
 * uuid()
 */
export const uuid = () => {
    let dt = new Date().getTime()
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = (dt + Math.random() * 16) % 16 | 0
        dt = Math.floor(dt / 16)
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
    return uuid
}

/**
 * limitStr()
 */
export const limitStr = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str
}

/**
 * randomStr()
 */
export const randomStr = (length: number) => {
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
 * replace()
 */
export const replaceStr = (
    search: string,
    replacement: string,
    str: string
) => {
    return str.split(search).join(replacement)
}

/**
 * squish()
 */
export const squish = (str: string, numSpaces: number = 1) => {
    const regex = new RegExp(`\\s{${numSpaces},}`, 'g')
    return str.replace(regex, ' '.repeat(numSpaces)).trim()
}

/**
 * contains()
 */
export const contains = (word: string, str: string) => {
    return str.includes(word)
}

/**
 * containsAll()
 */
export const containsAll = (words: string[], str: string) => {
    for (const word of words) {
        return !str.includes(word) ? false : true
    }
    return true
}
