import currencies from '@/consts/currencies';

const state = {
    _currencies: currencies,
    _amount: 40,
    _currencyIdx: 0,
    _presets: [40, 100, 200, 1000, 2500, 5000],
};

const getters = {
    currencies: state => state._currencies,
    currencyIdx: state => state._currencyIdx,
    suggestions: (state) => (
        state._presets.map(p => {
            const rawNumber = p * state._currencies[state._currencyIdx].rate;
            const siginficantDigits = rawNumber.toFixed().length;
            const multiplier = siginficantDigits > 2
                ? Math.pow(10, siginficantDigits - 2) * 5
                : 10;
            const formatedAmount = Math.floor(rawNumber / multiplier) * multiplier;

            return {
                amount: formatedAmount,
                formattedAmount: formatedAmount.toLocaleString(
                    'en-US',
                    {
                        style: 'currency',
                        currency: state._currencies[state._currencyIdx].code,
                        maximumFractionDigits: 0,
                        useGrouping: true,
                    },
                ),
            };
        })
    ),
    amount: state => state._amount,
};

const mutations = {
    SET_CURRENCY_IDX: (state, currencyIdx) => {
        state._currencyIdx = currencyIdx;
    },
    SET_AMOUNT: (state, amount) => {
        state._amount = amount;
    },
};
const actions = {
    async createDonation({state}) {
        return await fetch(
            'http://localhost:5000/donate',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    currency: state._currencies[state._currencyIdx].code,
                    amount: state._amount,
                }),
            },
        )
            .then(async response => {
                const resp = await response.json();

                if (resp.ok === true) {
                    window.alert('Thank you for your donation!');
                }
            });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};