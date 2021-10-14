import mongoose, {Schema} from 'mongoose';

const DonationSchema = new Schema({
    currency: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    }
});

export default mongoose.model('Donation', DonationSchema, 'donations')