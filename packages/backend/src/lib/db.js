import mongoose from 'mongoose';

/**
 * @return {Object}
 */
const connectDb = () => {
    mongoose.connect('mongodb://localhost:27017/test-db',
        (err) => {
            if (err) {
                console.error('Mongoose server starting error', err);
            }
        },
    );

    return mongoose.connection;
};

const disconnectDb = () => mongoose.disconnect();

export {
    connectDb,
    disconnectDb,
};
