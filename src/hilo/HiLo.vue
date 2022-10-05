<script src="./hilo.js"></script>

<docs>
Example:

```vue
<hilo></hilo>
```
</docs>

<template>
    <div>
        <!-- Scoring -->
        <dl>
            <dt>Wins</dt>
            <dd>{{ wins }}</dd>
            <dt>Losses</dt>
            <dd>{{ losses }}</dd>
            <dt>Cards Remaining</dt>
            <dd>{{ deck.length }}</dd>
            <dt>Cards Played</dt>
            <dd>{{ played.length }}</dd>
        </dl>
        <!-- Card Stats -->
        <div>
            <div v-if="previousCard">
                <h3>Previous Card</h3>
                <p>
                    {{ previousCard.value }} {{ suitName(previousCard.suit) }}
                </p>
            </div>
            <div v-if="currentCard">
                <h3>Current Card</h3>
                <p>
                    {{ currentCard.value }} {{ suitName(currentCard.suit) }}
                </p>
            </div>
        </div>
        <!-- Actions -->
        <div>
            <button @click="guess('high')">High</button>
            <button @click="guess('low')">Low</button>
        </div>
    </div>
</template>