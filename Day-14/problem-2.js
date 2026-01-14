function socialMediaAnalytics(posts) {
    // Rule 1: Validate input
    if (!Array.isArray(posts)) return "Invalid Input";

    // Rule 2: Initialize containers
    let mostLiked = -1;
    let commentCounts = {};
    let totalEngagement = 0;

    // Rule 3: Process each post
    for (let post of posts) {
        // Rule 4: Validate post
        if (
            post &&
            typeof post.postId === "number" &&
            typeof post.likes === "number" &&
            Array.isArray(post.comments) &&
            post.comments.every(c => typeof c === "string")
        ) {
            commentCounts[post.postId] = post.comments.length;

            // Rule 5: Track most liked
            if (post.likes > (posts.find(p => p.postId === mostLiked)?.likes || -1)) {
                mostLiked = post.postId;
            }

            // Rule 6: Calculate total engagement
            totalEngagement += post.likes + post.comments.length;
        }
    }

    // Rule 7: Return result object
    return {
        mostLiked: mostLiked,
        commentCounts: commentCounts,
        totalEngagement: totalEngagement
    };
}

// Example Usage:
console.log(
    socialMediaAnalytics([
        {
            postId: 101,
            likes: 120,
            comments: ["Good", "Nice"]
        },
        {
            postId: 102,
            likes: 50,
            comments: []
        },
        {
            postId: 103,
            likes: 200,
            comments: ["Awesome"]
        }
    ])
);
