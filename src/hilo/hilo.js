import {
    DEFAULT_VALUES, DEFAULT_SUITS, DEFAULT_DECK,
    DEFAULT_WINS, DEFAULT_LOSSES
} from './DEFAULTS'
import {shuffle} from 'fast-shuffle'

export default {
    name: 'hilo',
    data() {
        return {
            wins: DEFAULT_WINS,
            losses: DEFAULT_LOSSES,
            deck: [],
            played: []
        }
    },
    computed: {
        previousCard() {
            return (this.played.length >= 2) ? this.played[this.played.length - 2] : null
        },
        currentCard() {
            return (this.played.length >= 1) ? this.played[this.played.length - 1] : null
        },
        highestValue() {
            return DEFAULT_VALUES[DEFAULT_VALUES.length - 1]
        },
        lowestValue() {
            return DEFAULT_VALUES[0]
        }
    },
    methods: {
        win() {
            this.wins++
        },
        lose() {
            this.losses++
        },
        guess(guess) {
            this.play().then( () => {
                let [previousValue, currentValue] = [
                    this.previousCard.value, this.currentCard.value
                ]
    
                if (
                    (guess === 'high' && this.higher(currentValue, previousValue))
                    || (guess === 'low' && this.lower(currentValue, previousValue))
                ) {
                    this.win()
                } else {
                    this.lose()
                }
            })

        },
        async play() {
            return new Promise( (resolve) => {
                let card = this.draw()
                this.played.push(card)
                resolve()
            })
        },
        draw() {
            return this.deck.pop()
        },
        suitName(suit) {
            return DEFAULT_SUITS[suit]
        },
        higher(expectedValue, establishedValue) {
            return DEFAULT_VALUES.indexOf(expectedValue) > DEFAULT_VALUES.indexOf(establishedValue)
        },
        lower(expectedValue, establishedValue) {
            return DEFAULT_VALUES.indexOf(expectedValue) < DEFAULT_VALUES.indexOf(establishedValue)
        }
    },
    created() {
        this.deck = shuffle(DEFAULT_DECK)
    },
    mounted() {
        this.play()
    }
}