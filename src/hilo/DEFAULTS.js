export const DEFAULT_NUMBERS = Array.from({length: 9}, (_, i) => i + 2) // 2-10
export const DEFAULT_ROLES = ['J', 'Q', 'K', 'A'] // Jack, Queen, King, Ace
export const DEFAULT_VALUES = DEFAULT_NUMBERS.concat(DEFAULT_ROLES)
export const DEFAULT_SUITS = {
    'c': 'CLUB', // ♣ (c)lubs
    'd': 'DIAMOND', // ♦ (d)iamonds
    'h': 'HEART', // ♥ (h)earts
    's': 'SPADE' // ♠ (s)pades
}
export const DEFAULT_DECK = [].concat(...Object.keys(DEFAULT_SUITS).map( (suit) => {
    return DEFAULT_VALUES.map( (value) => {
        return {value, suit}
    })
}))

export const DEFAULT_WINS = 0
export const DEFAULT_LOSSES = 0