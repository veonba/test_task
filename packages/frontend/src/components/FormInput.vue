<template>
    <div class="form-input">
        <input
            type="number"
            v-model="donationAmount"
            min="0"
        >
        <select @input="onSelectCurrency">
            <option
                v-for="(currency, i) in currencies"
                :key="currency.code"
                :value="i"
            >
                {{ currency.code }}
            </option>
        </select>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        name: "FormInput",
        computed: {
            ...mapGetters(
                'donation', [
                    'amount',
                    'currencyIdx',
                    'currencies',
                ],
            ),
            donationAmount: {
                set(val) {
                    this.setAmount(val);
                },
                get() {
                    return this.amount;
                },
            },
        },
        methods: {
            ...mapMutations('donation', {
                setAmount: 'SET_AMOUNT',
                setCurrencyIdx: 'SET_CURRENCY_IDX',
            }),
            onSelectCurrency(v) {
                this.donationAmount = Math.ceil(
                    this.donationAmount * this.currencies[v.target.value].rate / this.currencies[this.currencyIdx].rate,
                );
                this.setCurrencyIdx(v.target.value);
            },
        },
    };
</script>

<style scoped>
    .form-input {

    }
</style>