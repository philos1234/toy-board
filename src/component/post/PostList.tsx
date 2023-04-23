import React, { useState } from 'react';
import Post from './Post';

interface PostData {
    id: number;
    content: string;
}

const PostList = () => {
    const [posts, setPosts] = useState<PostData[]>([]);

    const addPost = (content: string) => {
        const newPost: PostData = {
            id: new Date().getTime(),
            content: content,
        };
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    return (
        <div>
        </div>
    );
};

export default PostList;