const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    image: String,
    published_at: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
