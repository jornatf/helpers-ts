/**
 * Returns a random number between {min} and {max}.
 * @example randBetween(5, 10) // 8
 * @param min Interval min
 * @param max Interval max
 * @returns Random number
 */
export const randBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min
}
