const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;
    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    const users = await User.create(
        {login: 'user1', password: '123', fullName: 'Carmen Rodriguez', token: 'qwerty'},
        {login: 'user2', password: '321', fullName: 'Herbert Perry' ,token: 'asdfg'}
    );

    const posts = await Post.create(
        {
            user: users[0]._id,
            title: 'John McAfee Vows to Unmask Crypto’s Satoshi Nakamoto, Then Backs Off',
            description: 'John McAfee, the eccentric antivirus pioneer known for his brushes with the law, said he has spoken with Bitcoin creator Satoshi Nakamoto and plans to reveal the person’s identity.',
            image: 'john.jpeg',
            datetime: '2019-04-25T10:00:00.765Z'
        },
        {
            user: users[1]._id,
            title: 'Tips for Effective Data Visualization',
            description: 'Data visualization has a strong design element to it. Given the differences in domains, applications and audience it’s hard to put a structure around the best way to visualize your data.',
            image: 'tips.jpeg',
            datetime: '2019-04-25T10:00:38.618Z'
        }
    );

    await Comment.create(
        {user: users[1]._id, post: posts[0]._id, text: 'Nakamoto wrote the white paper outlining Bitcoin in 2008'},
        {user: users[0]._id, post: posts[1]._id, text: 'Any other tips that might prevent visualization blunders?'}
    );

    await connection.close();
};

run().catch(error => {
    console.error('Something went wrong');
});
