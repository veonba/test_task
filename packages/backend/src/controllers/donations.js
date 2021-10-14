import Donation from '../models/Donation';

const createDonation = async (ctx) => (
    new Donation({
        currency: ctx.currency,
        amount: ctx.amount,
    })
        .save()
        .then(() => ctx.body = {"ok": true})
        .catch(() => ctx.body = {"ok": false, "error": 'Error while saving donation'})
);

export {
    createDonation,
};