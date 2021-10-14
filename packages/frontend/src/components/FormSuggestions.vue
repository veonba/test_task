<template>
    <div class="form-suggestions">
        <div
            v-for="(suggestion, i) in suggestions"
            :key="`form-suggestions-${i}`"
            class="form-suggestions__button"
        >
            <input
                v-model="suggestionValue"
                :value="suggestion.amount"
                type="radio"
                :id="`form-suggestion-${i}`"
                class="form-suggestions__button-input"
            >
            <label
                :for="`form-suggestion-${i}`"
                class="form-suggestions__button-label"
            >
                {{ suggestion.formattedAmount }}
            </label>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        name: "FormSuggestions",
        computed: {
            ...mapGetters(
                'donation', [
                    'suggestions',
                    'amount',
                ],
            ),
            suggestionValue: {
                set(val) {
                    this.setAmount(val);
                },
                get() {
                    return this.amount;
                },
            },
        },
        methods: mapMutations('donation', {
            setAmount: 'SET_AMOUNT',
        }),
    };
</script>

<style
    lang="scss"
    scoped
>
    .form-suggestions {
        &__button {
            float: left;
            margin: 2px;
            width: 100px;
            height: 40px;
            position: relative;

            &-input {
                opacity: 0.011;
                z-index: 100;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }

            &-input:checked + &-label {
                background: #447fb8;
            }

            &-label {
                padding: 10px;
                border: 1px solid #CCC;
                cursor: pointer;
                z-index: 90;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                &:hover {
                    background: #bcd2ef;
                }
            }
        }
    }
</style>