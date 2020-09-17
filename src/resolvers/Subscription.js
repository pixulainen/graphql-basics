const Subscription = {
	comment: {
		subscribe(parent, { postId }, { pubsub }, info) {
			return pubsub.asyncIterator(`comment`);
		}
	},
	post: {
		subscribe(parent, args, { pubsub }, info) {
			return pubsub.asyncIterator('post');
		}
	}
};

export { Subscription as default };
