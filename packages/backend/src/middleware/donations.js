import currencies from '../const/currencies';

const validateDonate = (ctx, next) => {
    ctx.currency = ctx.request.body['currency'];
    ctx.amount = Number(ctx.request.body['amount']);

    if (Object.prototype.hasOwnProperty.call(ctx.request.body, 'currency') === false) {
        return ctx.body = {'ok': false, 'error': 'Currency required'};
    }

    if (Object.prototype.hasOwnProperty.call(ctx.request.body, 'amount') === false) {
        return ctx.body = {'ok': false, 'error': 'Amount required'};
    }

    if (currencies.includes(ctx.currency) === false) {
        return ctx.body = {'ok': false, 'error': 'Currency Not Found'};
    }

    if (Number.isNaN(Number(ctx.amount))) {
        return ctx.body = {'ok': false, 'error': 'Amount should be a number'};
    }

    if (ctx.amount < 0) {
        return ctx.body = {'ok': false, 'error': 'Amount should be > 0'};
    }

    return next();
};

export {
    validateDonate,
};