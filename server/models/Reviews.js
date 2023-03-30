import mongoose from'mongoose';
const Schema = mongoose.Schema

const ReviewsSchema = new Schema({
    review: {
        type: String,
        required: true
    }
})

export default mongoose.model('Reviews', ReviewsSchema)